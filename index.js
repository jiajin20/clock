/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-05-18 17:10:08
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-05-20 13:59:41
 * @FilePath: \clock\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 假设您的HTML和CSS已经正确加载  
 
const clockHour = document.querySelector('.clock_hour');  
const clockMinute = document.querySelector('.clock_minute');  
const clockSecond = document.querySelector('.clock_second');  
function setClock() {  
    const now = new Date();  
    const hours = now.getHours();  
    const minutes = now.getMinutes();  
    const seconds = now.getSeconds();  
    const hoursDegree = ((hours % 12) * 30) + (minutes / 2); 
    const minutesDegree = minutes * 6;  
    const secondsDegree = seconds * 6;  
  
    clockHour.style.transform = `rotate(${hoursDegree}deg)`;  
    clockMinute.style.transform = `rotate(${minutesDegree}deg)`;  
    clockSecond.style.transform = `rotate(${secondsDegree}deg)`;  
}  
  
  
setClock();  
  
setInterval(setClock, 1000);