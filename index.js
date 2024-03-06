// code your solution here
function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}
function mondayWork(stuff = 'go to the office'){
    return `This Monday, I will ${stuff}.`;
}
function wrapAdjective(parameter= '*'){
    return function(adjective='special') {
        return `You are ${parameter}${adjective}${parameter}!`;
          };
        }
    