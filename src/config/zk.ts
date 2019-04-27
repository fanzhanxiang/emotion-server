export default {
  HOST : "10.50.8.27:2181",
  PATH : "/configuration/h5_dynamicConfig/hotelfx/", //路径
  get(key) {
    return this.PATH + key;
  }
}