
    //Ekrana bir adet input ve bir adet buton koy. Butona tıkladığımda inputtaki sayının karesi kadar buton oluşturup, ekrana koysun. Oluşturulan butonun %10 u kadar mayın olacak. Her butona tıkladığımda eğer butonda mayın yoksa buton arka plan rengi mavi olacak ve +10 puan kazanacak, eğer mayın varsa tüm mayınlar kırmızı, mayın olmayanlar mavi olacak ve oyun bitecek. Oyuncunun en yüksek skorunu tutmak zorundayım!!


    // document.getElementById("start").addEventListener("click", function () {

    //     //Start butonuna bastığında inputtaki değerin karesi kadar olan butonu ekrana yazdırıyorum. ŞEKİL KARE OLACAK!!! yani eğer kullanıcı 5 girdiyse 5 satır 5 sütun olacak. 5 column 5 row!!

    //     let userCount = document.getElementById('mayinAdet').value;

    //     //kullanıcı number bir değer girmediyse onu alert ile uyaralım!!
    


    //     for(let i = 1; i <= mayinCount; i++){

    //         //burada her for içerisinde bir buton oluşturacağım ve butonu ekrana basacağım. Ekrana basarken satır bitiş veya başlangıcına dikkat edilecek.

    //         //Toplam mayın adedinin %10 u kadar mayın olacak ve bunu RANDOM mayınların arkasında saklamam gerekli!!!
    //     }

    // })


    let btn= document.querySelector("button")
    let input= document.querySelector("input")
    let container= document.querySelector(".container")
    let main= document.querySelector("main")
let di
btn.addEventListener('click',create )
function create(){
    if(!input.value){
        alert("ENTER THE NUMBER")
    }
    else{
        let a = Number(input.value) * Number(input.value);  
        main.style.gridTemplateColumns=`repeat(${input.value},1fr)`
        for(let i = 1; i <= a*10/100; i++){
            let bomb= document.createElement("div")
            bomb.classList.add("bomb")
            let random =Math.random() * (input.value - 1) + 1
            // console.log(collaj)
            // main.appendChild(collaj)
      
        for(let i = 1; i <= a; i++){
          let collaj=document.createElement("div")
          let button= document.createElement("button")
          button.setAttribute('id', i)
          collaj.append(button)
          if(i=random){
            collaj.append(bomb)
          }
          main.appendChild(collaj)
          console.log('button create')}
    let b= a*10/100
    let c=Math.round(b)
            //Create bomb
  
console.log(button)

    }}

}
