const {readFile,wrtieFile, read, writeFile}=require('fs')

readFile('./content/text1.txt','utf8',(err,result)=>{
  if (err)  console.log(err)
  const first=result
  writeFile('./content/async-result.txt',`Here is the result: ${first}`,(err,result)=>{
    if(err) console.log(err)
})
})