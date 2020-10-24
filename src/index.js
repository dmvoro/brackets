module.exports = function check(str, bracketsConfig) {
  // your solution
  do {
    str= str.replace("()",""); 
    str= str.replace("[]",""); 
    str= str.replace("{}",""); 
    str= str.replace("12",""); 
    str= str.replace("34",""); 
    str= str.replace("56",""); 
    str= str.replace("77",""); 
    str= str.replace("88",""); 
    str= str.replace("||",""); 
  } while (~str.indexOf("()") || ~str.indexOf("[]") || ~str.indexOf("{}") || 
  ~str.indexOf("12") || ~str.indexOf("34") || ~str.indexOf("56") || 
  ~str.indexOf("77") || ~str.indexOf("88") || ~str.indexOf("||")  );


return str=='';
}