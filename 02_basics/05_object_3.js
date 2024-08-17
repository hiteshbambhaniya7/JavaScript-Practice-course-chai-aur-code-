//destructuring

 const course ={
    name:"javasript",
    price : "999",
    courseInstructor : "john Doe"
 }

 //course.courseInstructor

 const {courseInstructor} = course
 console.log(courseInstructor) //"john Doe"
 //or
 const {courseInstructor : instructor} = course
 console.log(instructor) //"john Doe"
