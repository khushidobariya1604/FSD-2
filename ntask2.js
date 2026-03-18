 var fs=require("fs")

// fs.mkdir("mytask",
//       (e)=>{
//           if(e)
//               {throw e}
//           else
//               { console.log("Folder Created !")}
//       })

   fs.writeFile("mytask/task.txt","Hello !",
      (e)=>{
          if(e)
              {throw e}
          else
              {
                 fs.appendFile("mytask/task.txt","\n Good Morning !",
                    (e)=>{
                        if(e) {throw e}
          else {fs.copyFile("mytask/task.txt","mytask/task1.txt",
                (e)=>{
                    if(e){ throw e}
                    else{ fs.unlink("mytask/task.txt", 
                        (e)=>{
                            if(e) {throw e}
                            else { fs.rename("mytask/task1.txt","mytask/task.txt",
                (e)=>{
                    if(e) {throw e}
                else
                  { fs.readFile("mytask/task.txt","utf-8",
                    (e,data)=>{
                        if(e){throw e}
                        else {console.log(data)}
    })}

    })}

    })}

    })}

    })}

    })


  

   


     

   



    

   


