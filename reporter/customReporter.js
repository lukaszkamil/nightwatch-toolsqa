const fs = require('fs');

const customReporter = {
  writeCustom(results, done) {
    const resultDir = 'results';
    if (!fs.existsSync(resultDir)) {
      fs.mkdirSync(resultDir);
    }

    Object.keys(results.modules).forEach((testFileResultName) => {
      const testFileResultObjectRaw = results.modules[testFileResultName];
      const testFileName = testFileResultName.split('/').join('.');
      const testFileResultArray = [];
      const outputFile = `./${resultDir}/${testFileName}-result.json`;

      Object.keys(testFileResultObjectRaw.completed).forEach((singleTestResultName) => {
        const singleTestResultObjectRaw = testFileResultObjectRaw.completed[singleTestResultName];
        const singleTestResultObject = {
          name: singleTestResultName,
          group: testFileResultObjectRaw.group,
          status: (singleTestResultObjectRaw.failed == 0) ? 'passed' : 'failed',
          duration: `${singleTestResultObjectRaw.time} s`,
        };

        if (singleTestResultObjectRaw.failed !== 0) {
          const error = {
            name: singleTestResultObjectRaw.lastError.name,
            message: singleTestResultObjectRaw.lastError.message,
            stacktrace: singleTestResultObjectRaw.lastError.stack,
          };

          singleTestResultObject.error = error;
        }

        testFileResultArray.push(singleTestResultObject);
      });

      if (testFileResultObjectRaw.skipped.length !== 0) {
        testFileResultObjectRaw.skipped.forEach((singleTestResultObjectRaw, index) => {
          const singleTestResultObject = {
            name: testFileResultObjectRaw.skipped[index],
            group: testFileResultObjectRaw.group,
            status: 'skipped',
            duration: '0 s',
          };

          testFileResultArray.push(singleTestResultObject);
        });
      }

      fs.writeFile(outputFile, JSON.stringify(testFileResultArray), (err) => {
        if (err) {
          console.warn('Unable to write test results JSON', err);
        }
      });
    });

    done();
  },
};

module.exports = customReporter;
