export default {  
  init: function (AK){  
    //console.log("初始化百度地图脚本...");  
    AK = AK || "AK密钥" 
    const BMap_URL = "https://api.map.baidu.com/api?v=2.0&ak="+ AK +"&s=1&callback=onBMapCallback"  
    return new Promise((resolve, reject) => {  
      // 如果已加载直接返回  
      if(typeof BMap !== "undefined") {  
        resolve(BMap)  
        return true 
      }  
      // 百度地图异步加载回调处理  
      window.onBMapCallback = function () {  
        console.log("百度地图脚本初始化成功...")
        resolve(BMap)  
      };  
  
      // 插入script脚本
      // 插入成功会触发callback回调,此时再对BMap处理,采用promise是为了异步处理该步骤
      let scriptNode = document.createElement("script")  
      scriptNode.setAttribute("type", "text/javascript")  
      scriptNode.setAttribute("src", BMap_URL)  
      document.body.appendChild(scriptNode)  
    });  
  }  
} 