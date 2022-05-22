let amar={
    location:"Goa",
    profession:"Singer"
}

function skill(prof){
    this.profession.push(prof)
}

let akbar={
    location:"mumbai",
    profession:"chef"
}
skill.call(amar,akbar.profession[0])
console.log(amar)