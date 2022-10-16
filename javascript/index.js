// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
// ...





// Iteration 2 - using promises
// ...

// Iteration 3 using async/await
async function makeBroccoli() {
  let step0 = await obtainInstruction("broccoli", 0);
  document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
  let step1 = await obtainInstruction("broccoli", 1);
  document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
  let step2 = await obtainInstruction("broccoli", 2);
  document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
  let step3 = await obtainInstruction("broccoli", 3);
  document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
  let step4 = await obtainInstruction("broccoli", 4);
  document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
  let step5 = await obtainInstruction("broccoli", 5);
  document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
  let step6 = await obtainInstruction("broccoli", 6);
  document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
  // para hacer el desplay de la imagen: 
  document.querySelector("#broccoliImg").removeAttribute("hidden");

  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
}
makeBroccoli();

// ...

// Bonus 2 - Promise all
// Brussels Sproouts con promise all
 async function makeBrusselsSprouts() {
  const s0 = obtainInstruction("brusselsSprouts", 0);
  const s1 = obtainInstruction("brusselsSprouts", 1);
  const s2 = obtainInstruction("brusselsSprouts", 2);
  const s3 = obtainInstruction("brusselsSprouts", 3);
  const s4 = obtainInstruction("brusselsSprouts", 4);
  const s5 = obtainInstruction("brusselsSprouts", 5);
  const s6 = obtainInstruction("brusselsSprouts", 6);
  const s7 = obtainInstruction("brusselsSprouts", 7);
  const s8 = `Brussels sprouts are ready!`;
  const [step0, step1, step2, step3, step4, step5, step6, step7, step8] =
    await Promise.all([s0, s1, s2, s3, s4, s5, s6, s7, s8]);
  const newArr = [
    step0,
    step1,
    step2,
    step3,
    step4,
    step5,
    step6,
    step7,
    step8,
  ];
  newArr.map((elem) => {
    return (document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${elem}</li>`);
  });
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
}

makeBrusselsSprouts()
// ...