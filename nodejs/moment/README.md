# JavaScript 日期处理类库

## 安装
    bower install moment --save # bower
    npm install moment --save   # npm
    Install-Package Moment.js   # NuGet
    spm install moment --save   # spm
    meteor add momentjs:moment  # meteor

## 日期格式化
    moment().format('MMMM Do YYYY, h:mm:ss a'); // 四月 17日 2018, 11:48:10 中午
    moment().format('dddd');                    // 星期二
    moment().format("MMM Do YY");               // 4月 17日 18
    moment().format('YYYY [escaped] YYYY');     // 2018 escaped 2018
    moment().format();                          // 2018-04-17T11:48:10+08:00

## 相对时间
    moment("20111031", "YYYYMMDD").fromNow(); // 6 年前
    moment("20120620", "YYYYMMDD").fromNow(); // 6 年前
    moment().startOf('day').fromNow();        // 12 小时前
    moment().endOf('day').fromNow();          // 12 小时内
    moment().startOf('hour').fromNow();       // 1 小时前

## 日历时间
    moment().subtract(10, 'days').calendar(); // 2018年4月7日
    moment().subtract(6, 'days').calendar();  // 上周三中午11点49
    moment().subtract(3, 'days').calendar();  // 上周六中午11点49
    moment().subtract(1, 'days').calendar();  // 昨天中午11点49分
    moment().calendar();                      // 今天中午11点49分
    moment().add(1, 'days').calendar();       // 明天中午11点49分
    moment().add(3, 'days').calendar();       // 本周五中午11点49
    moment().add(10, 'days').calendar();      // 2018年4月27日

## 多语言支持

    moment().format('L');    // 2018-04-17
    moment().format('l');    // 2018-04-17
    moment().format('LL');   // 2018年4月17日
    moment().format('ll');   // 2018年4月17日
    moment().format('LLL');  // 2018年4月17日中午11点49分
    moment().format('lll');  // 2018年4月17日中午11点49分
    moment().format('LLLL'); // 2018年4月17日星期二中午11点49分
    moment().format('llll'); // 2018年4月17日星期二中午11点49分