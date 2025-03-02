document.getElementById('discover-btn').addEventListener('click', function(){
    window.location.href="answer.html"
})

const taskCount = getInnerTextByID('task-count');
const checkboxCount = getInnerTextByID('checkbox-count');


 const buttons = document.querySelectorAll('.complete-button');
 for(const button of buttons){
    button.addEventListener('click', function(){
        alert('Board Updated Successfully');
        this.disabled = true;
        this.style.backgroundColor = 'White';
        this.style.color = 'Gray'; 
      
      })
       
 }

 document.getElementById('complete-btn-6').addEventListener('click', function(){
    alert('congratulation!!! You have completed all the current task.')
 })

 document.getElementById('complete-1').addEventListener('click', function(){

   const taskCount1 = taskCount - 1;
   document.getElementById('task-count').innerText = taskCount1 ;


const checkboxCount1 = checkboxCount + 1;
   document.getElementById('checkbox-count').innerText = checkboxCount1 ;

    const container = document.getElementById("history-container");

    const now = new Date();
    let Time = now.toLocaleTimeString();

      const text1 = document.getElementById('p-text').innerText;
            const div = document.createElement("div");
div.classList.add("bg-[#F4F7FF]");
div.classList.add("mx-4");
div.classList.add("text-center");
div.classList.add("mt-4");

          div.innerHTML = `
         <p> You have Complete The Task ${text1} at ${Time} </p>
          `
          container.appendChild(div)
 })


 document.getElementById('complete-2').addEventListener('click', function(){
   const taskCount1 = taskCount - 2;
   document.getElementById('task-count').innerText = taskCount1 ;


const checkboxCount1 = checkboxCount + 2;
   document.getElementById('checkbox-count').innerText = checkboxCount1 ;

    const container = document.getElementById("history-container");
 
    const now = new Date();
       let Time = now.toLocaleTimeString();

      const text2 = document.getElementById('p-text-2').innerText;
            const div = document.createElement("div");
            div.classList.add("bg-[#F4F7FF]");
            div.classList.add("mx-4");
            div.classList.add("text-center");
            div.classList.add("mt-4");
            
          div.innerHTML = `
         <p> You have Complete The Task ${text2} at ${Time}  </p>
          `
          container.appendChild(div)
 })



 document.getElementById('complete-3').addEventListener('click', function(){
   const taskCount1 = taskCount - 3;
           document.getElementById('task-count').innerText = taskCount1 ;


        const checkboxCount1 = checkboxCount + 3;
           document.getElementById('checkbox-count').innerText = checkboxCount1 ;
    const container = document.getElementById("history-container");

    const now = new Date();
    let Time = now.toLocaleTimeString();

      const text3 = document.getElementById('p-text-3').innerText;
            const div = document.createElement("div");
            div.classList.add("bg-[#F4F7FF]");
            div.classList.add("mx-4");
            div.classList.add("text-center");
            div.classList.add("mt-4");
            
          div.innerHTML = `
         <p> You have Complete The Task ${text3} at ${Time} </p>
          `
          container.appendChild(div)
 })



 document.getElementById('complete-4').addEventListener('click', function(){
   const taskCount1 = taskCount - 4;
           document.getElementById('task-count').innerText = taskCount1 ;


        const checkboxCount1 = checkboxCount + 4;
           document.getElementById('checkbox-count').innerText = checkboxCount1 ;


    const container = document.getElementById("history-container");

    const now = new Date();
    let Time = now.toLocaleTimeString();

      const text4 = document.getElementById('p-text-4').innerText;
            const div = document.createElement("div");
            div.classList.add("bg-[#F4F7FF]");
            div.classList.add("mx-4");
            div.classList.add("text-center");
            div.classList.add("mt-4");
            
          div.innerHTML = `
         <p> You have Complete The Task ${text4} at ${Time} </p>
          `
          container.appendChild(div)
 })




 document.getElementById('complete-5').addEventListener('click', function(){
   const taskCount1 = taskCount - 5;
           document.getElementById('task-count').innerText = taskCount1 ;


        const checkboxCount1 = checkboxCount + 5;
           document.getElementById('checkbox-count').innerText = checkboxCount1 ;


    const container = document.getElementById("history-container");
       const now = new Date();
       let Time = now.toLocaleTimeString();
       
      const text5 = document.getElementById('p-text-5').innerText;
            const div = document.createElement("div");
            div.classList.add("bg-[#F4F7FF]");
            div.classList.add("mx-4");
            div.classList.add("text-center");
            div.classList.add("mt-4");
            
          div.innerHTML = `
         <p> You have Complete The Task ${text5} at  ${Time} </p>
          `
          container.appendChild(div)
 })



 
 document.getElementById('complete-btn-6').addEventListener('click', function(){

   const taskCount1 = taskCount - 6;
           document.getElementById('task-count').innerText = taskCount1 ;


        const checkboxCount1 = checkboxCount + 6;
           document.getElementById('checkbox-count').innerText = checkboxCount1 ;

    const container = document.getElementById("history-container");

    const now = new Date();
    let Time = now.toLocaleTimeString();

      const text6 = document.getElementById('p-text-6').innerText;
            const div = document.createElement("div");
            div.classList.add("bg-[#F4F7FF]");
            div.classList.add("mx-4");
            div.classList.add("text-center");
            div.classList.add("mt-4");
            
          div.innerHTML = `
         <p> You have Complete The Task ${text6} at ${Time} </p>
          `
          container.appendChild(div)
 })


 document.getElementById('clear-history').addEventListener('click', function(){
   document.getElementById('history-container').innerHTML = "";
 })
 
document.getElementById('new-date').textContent = new Date().toDateString();



document.getElementById('bg-btn').addEventListener('click', function(){
   const red = Math.floor(Math.random() * 256);
   const green = Math.floor(Math.random() * 256);
   const blue = Math.floor(Math.random() * 256);
   document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"

})
