exports.testNativeLib = function() {
        let str;
        try {
            const testClass = new SimpleTest()
            str = testClass.announce()
        } catch(e) {
            str = e.message;
        }
        console.log("Plugin got:", str);
        return str;
    };
    
    