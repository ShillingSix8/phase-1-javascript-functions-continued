
function saturdayFun (fun = `roller-skate`) {
    return `This Saturday, I want to ${fun}!`;
}

saturdayFun(`bathe my dog`);

function mondayWork(activity = `go to the office`) {
    return `This Monday, I will ${activity}.`;
}

mondayWork(`work from home`)

// Cheated on the one below.....got me ????

let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }