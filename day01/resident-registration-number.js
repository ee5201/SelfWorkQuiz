

function Resident (number) {
  if(number.length > 14 ){
    console.log("”에러 발생!!! 개수를 제대로 입력해 주세요!!!”가 출력된다.")
    return ;
  }else if(number.includes("-") === true){
    const result = number.replace(number.slice(8),"******")
    console.log(result)
    return;
  }else{
    console.log("에러 발생!!! 형식이 올바르지 않습니다!!!")
    return;
  }


  
}
Resident("210510-1010101")