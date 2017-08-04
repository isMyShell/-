var express = require('express');
var axios = require('axios')
var router = express.Router();

/* GET home page. */
router.get('/shortUrl', function(req, res, next) {
  // res.send('respond with a resource????'); 
  
  var url = 'http://dwz.wailian.work/api.php'
  var head = {
      Accept:"application/json, text/javascript, */*; q=0.01",
      'Accept-Encoding':"gzip, deflate",
      'Accept-Language':"zh-CN,zh;q=0.8",
      Connection:"keep-alive",
      Cookie:"__cfduid=d9bb5378c68542e99aa1e74ec07cdbf361501769837; PHPSESSID=csomltm6d49dh3jdggddma6cp5; Hm_lvt_fd97a926d52ef868e2d6a33de0a25470=1501769827; Hm_lpvt_fd97a926d52ef868e2d6a33de0a25470=1501779930",
      Host:"dwz.wailian.work",
      Referer:"http://dwz.wailian.work/",
      "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko), Chrome/60.0.3112.78 Safari/537.36",
      "X-Requested-With":"XMLHttpRequest"
    }

  axios.get(url,{
    headers:head,
    params:req.query
    // params:{
    //   url:"aHR0cDovL20uYmFpZHUuY29tL3NzaWQ9YjRhZDM2MzIzMzM4MzMzOTMzMzEzMDNhMGEvZnJvbT04NDRiL3M/d29yZD0lRTclQkMlQkElRTUlQkYlODMlRTclOUMlQkMlRTUlODQlQkYlRTYlODAlOEUlRTQlQjklODglRTYlQjIlQkImdHM9MDQxMjcxMyZ0X2t0PTAmaWU9dXRmLTgmZm1fa2w9MDIxMzk0YmUyZiZyc3ZfaXFpZD0wMDA5NDM3NjMzJnJzdl90PWVkZjZBcnZjR2RucGNGdXpwY1hZd0pjJTI1MkZKRThqR1Vac0wyRHJPQVd4RzJId3lRZlRyN0FBaG1McGxnJnNhPWlocl8xJm1zPTEmcnN2X3BxPTAwMDk0Mzc2MzMmcnN2X3N1ZzQ9MjAyOSZzcz0wMDEmZnJvbT04NDRiJnZpdD1mcHMmcHU9c3olNDAxMzIxXzQ4MCZ0X25vc2NyaXB0PWp1bXA=",
    //   site:"sina"
    // }

  }).then((response) => {
    res.json(response.data)
  }).catch((err) => {
    console.log(err);
  })
});

module.exports = router;
