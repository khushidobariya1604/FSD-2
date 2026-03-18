var fs=require("fs");
// fs.writeFile("temp1.txt","hii",
//     (e)=>{
//     if(e)
//         {throw e;}
//     else
//         {console.log("Async operation done !")}
// })
// fs.mkdir("afs",
//     (e)=>{
//         if(e)
//             {throw e}
//         else
//             { console.log("Created !")}
//     })
// fs.writeFile("afs/t1.txt","Hii",
//     (e)=>{
//         if(e)
//             {throw e}
//         else
//             {console.log("Written !")}
//     }
// )
// fs.appendFile("afs/t1.txt","Hello !",
//     (e)=>{
//         if(e)
//             {console.log("File not found"+e)}
//         else
//             {console.log("appended !")}
//     }
// )
// fs.readFile("afs/t1.txt","utf-8", 
//     (e,data)=>{
//          if(e)
//             {throw e}
//         else
//             {console.log(data)}
//     })

// fs.readFile("afs/t1.txt","utf-8", 
//     (e,data)=>{
//          if(e)
//             {throw e}
//         else
//             {fs.unlink("afs/t1.txt", 
//                 (e)=>{
//                     if(e)
//                         {throw e}
//                     else
//                         {console.log("Deleted !") }
//                 }
//             )}
//     })
// fs.rmdir("afs",
//      (e)=>{
//          if(e)
//              {throw e}
//          else
//              {console.log("folder deleted !")}
//      }
//  )

//  fs.rename("temp1.txt","newfile.txt",
//     (e)=>{
//         if(e){ throw e}
//         else{console.log("Renamed !")}
//     }
//  )

 fs.copyFile("newfile.txt","myfile.txt",
    (e)=>{
        if(e){ throw e}
        else{console.log("copied !")}
    }
 )