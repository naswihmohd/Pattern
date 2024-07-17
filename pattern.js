// // var star=''

const row=5


for(i=0;i<row;i++){
    var star=''
    for(j=0;j<=i;j++){
        star='* '+star
    }
    console.log(star)
}

console.log('next pattern') 


for(i=0;i<=row;i++){
    var star=''
    for(j=i;j<row;j++){
        star='* '+star
    }
    console.log(star)
}

console.log('next pattern&&')

for(i=row;i>=1;i--){
    var pattern=''
    for(j=1;j<=row-i;j++){
        // pattern=' '+pattern
        pattern+="  "
    }
    for(k=1;k<=i;k++){
        pattern+='* '
        // pattern=pattern+'*'
    }
    
    console.log(pattern)
}

console.log('next pattern&&')

for(i=1;i<=row;i++){
    var pattern=''
    for(j=1;j<=row-i;j++){
        // pattern=' '+pattern
        pattern+="  "
    }
    for(k=1;k<=i;k++){
        pattern+='* '
        // pattern=pattern+'*'
    }
    
    console.log(pattern)
}

console.log('next pattern')

for(i=1;i<=row;i++){
    var pattern=''
    for(j=1;j<=row-i;j++){
        // pattern=' '+pattern
        pattern+="  "
    }
    for(k=1;k<=i*2-1;k++){
        pattern+='* '
        // pattern=pattern+'*'
    }
    
    console.log(pattern)
}


console.log('next pattern triangle star pattern')


for(i=1;i<=row;i++){
    var pattern=''
    for(j=1;j<=row-i;j++){
        // pattern=' '+pattern
        pattern+=" "
    }
    for(k=1;k<=i;k++){
        pattern+='* '
        // pattern=pattern+'*'
    }
    
    console.log(pattern)
}

console.log('next pattern k pattern')


for(i=1;i<=row;i++){
    var pattern=''
    for(j=i;j<=row;j++){
        pattern+='* '
    }
    console.log(pattern)
}

for(i=2;i<=row;i++){
    var pattern=''
    for(j=1;j<=i;j++){
        pattern+='* '
    }
    console.log(pattern)
}

console.log('----------------------------')

for(i=0;i<=row;i++){
    let patten=''
    for(j=i;j<=row;j++){
        patten+='* '
    }
    for(k=0;k<i;k++){
        patten+='    '
    }
    for(m=i;m<=row;m++){
        patten+="* "
    }
    console.log(patten)
}
for(i=0;i<=row;i++){
    let patten=''
    for(j=0;j<=i;j++){
        patten+='* '
    }
    for(k=i;k<row;k++){
        patten+='    '
    }
    for(l=0;l<=i;l++){
        patten+='* '
    }
    console.log(patten)
}

console.log('numbers pattern')

for(i=2;i<=row+1;i++){
    var value=''
    for(j=1;j<i;j++){
        value+=j+' '
    }
    console.log(value)
}

console.log('Hallow pattern')

for(i=1;i<=row;i++){
    var pattern='* '
    for(j=i;j<=row;j++){
        pattern=' '+pattern
    }
    for(k=2;k<=i;k++){
        pattern+='  '
    }
    for(l=1;l<=1;l++){
        pattern+='*'
    }

    console.log(pattern)
}

for(i=1;i<=row+1;i++){
    var pattern='* '
    for(j=1;j<i;j++){
        pattern=' '+pattern
    }
    for(k=i;k<=row;k++){
        pattern+='  '
    }
    for(l=1;l<=1;l++){
        pattern+='*'
    }

    console.log(pattern)
}

