let dns=require('dns')
dns.lookup('www.github.com',function onLookup(err,address,family){
  console.log('ip地址：'+address)
  dns.reverse(address,function(err,hostNames){
    if(err){
      console.error(err.stack)
    }
    console.log('方向解析'+address+':'+JSON.stringify(hostNames))
  })
})