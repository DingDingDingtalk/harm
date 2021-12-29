function add(num1, num2) {
    //将数字转换为字符串
    num1 = num1.toString();
    num2 = num2.toString();

    //获取小数点的位置
    var index1 = num1.indexOf(".");
    var index2 = num2.indexOf(".");

    //如果小数点存在，那么就再获取各自的小数位数
    var ws1 = 0;
    var ws2 = 0;
    if (index1 != -1) {
        ws1 = num1.split(".")[1].length;
    }
    if (index2 != -1) {
        ws2 = num2.split(".")[1].length;
    }

    //看谁的小数位大，谁的小数位小
    var bigger = (ws1 > ws2) ? wa1 : ws2;
    var smaller = (ws1 < ws2) ? ws1 : ws2;

    //计算得到需要补齐的0的个数
    var zerosCount = bigger - smaller;

    //全部去除小数点
    num1 = num1.replace(".", "");
    num2 = num2.replace(".", "");

    //比较num1和num2谁大，谁是smaller，谁就补0
    if (ws1 == smaller) {
        for (var i = 0; i < zerosCount; i++) {
            num1 += "0";
        }
    } else {
        for (var i = 0; i < zerosCount; i++) {
            num2 += "0";
        }
    }

    //开始计算
    var sum = parseInt(num1) + parseInt(num2);

    //根据较大的小数位数计算倍数
    var beishu = 1;
    for (var i = 0; i < bigger; i++) {
        beishu = beishu * 10;
    }
    sum = sum / beishu;
    return sum;
}

function mult(num1, num2) {
    //将数字转换为字符串
    num1 = num1.toString();
    num2 = num2.toString();

    //获取小数点的位置
    var index1 = num1.indexOf(".");
    var index2 = num2.indexOf(".");

    //如果小数点存在，那么就再获取各自的小数位数
    var ws1 = 0;
    var ws2 = 0;
    if (index1 != -1) {
        ws1 = num1.split(".")[1].length;
    }
    if (index2 != -1) {
        ws2 = num2.split(".")[1].length;
    }

    //看谁的小数位大，谁的小数位小
    var bigger = (ws1 > ws2) ? ws1 : ws2;
    var smaller = (ws1 < ws2) ? ws1 : ws2;

    //计算得到需要补齐的0的个数
    var zerosCount = bigger - smaller;

    //全部去除小数点
    num1 = num1.replace(".", "");
    num2 = num2.replace(".", "");

    //比较num1和num2谁大，谁是smaller，谁就补0
    if (ws1 == smaller) {
        for (var i = 0; i < zerosCount; i++) {
            num1 += "0";
        }
    } else {
        for (var i = 0; i < zerosCount; i++) {
            num2 += "0";
        }
    }

    //开始计算
    var sum = parseInt(num1) * parseInt(num2);

    //计算倍数
    var beishu = 1;
    var s = smaller + bigger + zerosCount;
    for (var i = 0; i < s; i++) {
        beishu = beishu * 10;
    }
    sum = sum / beishu;
    return sum;
}


function out() {
    var i;
    var value = [];
    for (i = 1; i < 8; i++) {
        value[i - 1] = document.getElementById("" + i).value;
        console.log("%lf", value[i - 1]);
    }//获得输入框内的值
    value[5]=1.5*(1+value[5]+value[6]);
    var result = 1;
    for (i = 0; i < 6; i++) {
        result = mult(result, value[i]);//计算
    }
    alert("期望伤害为:"+result*1.5);//1.5倍率
}
