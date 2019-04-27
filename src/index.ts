import one from "te-one";
one.start({
  willLaunch() {
    console.log('demo willLaunch...');
  },
  didLaunch() {
    console.log('demo didLaunch!');
  }
});