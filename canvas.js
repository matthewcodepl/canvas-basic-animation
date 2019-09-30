const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d');
// ctx.fillStyle = 'rgba(255,0,0,0.5)';
// ctx.fillRect(100,100,100,100);
// ctx.fillStyle = 'rgba(25,0,0,0.5)';
// ctx.fillRect(400,100,100,100);
// ctx.fillRect(300,300,100,100);

// console.log(canvas);

// //line

// ctx.beginPath();
// ctx.moveTo(50,300);
// ctx.lineTo(300,100);
// ctx.lineTo(400,300);

// ctx.strokeStyle = 'rgb(41,41,41)';
// ctx.stroke();

// //circle

//     function animateThis() {
//         // console.log();
//         x = 132;
//     }
// for(let i = 0; i<500; i++) {
//     let x=Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     ctx.beginPath();
//     ctx.arc(x,y,60,0, Math.PI * 2, false);
//     ctx.strokeStyle = 'blue'
//     ctx.strokeStyle = `rgb(${Math.random()*256},${Math.random()*256}, ${Math.random()*256})`;
//     ctx.stroke();
// }
    let mouse = {  
    x: undefined,
    y: undefined
    }
    let maxRadius = 40;
    let minRadius = 10;

    let colorArray = [
        '#ffaa33',
        '#99ffaaa',
        '#00ff00',
        '#4411aa',
        '#ff1100'
    ]
    window.addEventListener('mousemove', function(e) {
        // console.log(123);
        mouse.x = e.x;
        mouse.y = e.y;
        console.log(mouse);


    })

function Circle(x,y,dx,dy,radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random()*colorArray.length)];
    this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0, Math.PI * 2, false);
        ctx.strokeStyle = 'blue'
        // ctx.strokeStyle = `rgb(${Math.random()*256},${Math.random()*256}, ${Math.random()*256})`;
        ctx.fillStyle = this.color;
        ctx.fill(); 
    }
    


            // Here add this, what you want tu update in frame

        this.update= function() {
    if(this.x+ this.radius > innerWidth || this.x - this.radius < 0) {
        this.dx = -this.dx;
    }
    if(this.y+this.radius > innerHeight || this.y - this.radius < 0) {
        this.dy = -this.dy;
    }
    this.x+=this.dx;
    this.y+=this.dy;
        //interactivit y
        if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if(this.radius<maxRadius) {
                this.radius +=1;
                
            }        } 
        
        else if(this.radius > minRadius) {
            this.radius -=1;
        }
            //draw function
        this.draw();
    }
}
        //Create array with circle
    let circleArray = [];

            // create one circle each time with random values
        for(let i = 0; i<200; i++) {
    let radius = Math.random() *3 +1;
    let x = Math.random()* (innerWidth - radius * 2) + radius;
    let y = Math.random()* (innerHeight - radius * 2) + radius ;
    let dx =(Math.random()-0.5);
    let dy = (Math.random()-0.5);
    circleArray.push(new Circle(x,y,dx,dy,radius))
}
// console.log(circleArray)







        // Loop function animate each time
    function animate() {

        requestAnimationFrame(animate);
        ctx.clearRect(0,0,innerWidth, innerHeight);
        

        for(let i= 0; i< circleArray.length;i++) {
            circleArray[i].update();
        }

    }

    animate();