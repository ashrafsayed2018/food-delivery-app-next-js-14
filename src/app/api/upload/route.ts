import {PutObjectCommand, S3Client} from "@aws-sdk/client-s3"
import uniqid from 'uniqid';


export async function POST(req: Request) {
    const data = await req.formData();

    // upload file to amazon s3 server

    if (data.get("file")) {
      // Upload file to Amazon S3 server
      const file = data.get("file");

     

      if (file instanceof File) {
          const extension = file.name.split(".").pop();
        
          const newFileName = uniqid() + "." + extension;

         
        

          // Initialize S3 client
          const s3Client = new S3Client(
            {
              region: process.env.S3_REGION,
              credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY || '',
                secretAccessKey: process.env.AWS_SECRET_KEY || '',
              },
            }
          );

        
          // const chunks: Uint8Array[] = [];

          // const reader = file.stream().getReader();
          
          // try {
          //   while (true) {
          //     const { done, value } = await reader.read();
          
          //     if (done) {
          //       break;
          //     }
          
          //     chunks.push(value);
          //   }
          // } finally {
          //   reader.releaseLock();
          // }
          // const buffer = Buffer.concat(chunks);    
          

        const buffer = Buffer.from(await file.arrayBuffer())
          const bucket = "ashraf-food-ordering"
          s3Client.send(new PutObjectCommand({
                Bucket:bucket,
                Key:newFileName,
                ACL:"public-read",
                ContentType:file.type,
                Body:buffer,
            
          }))

          const link = `https://${bucket}.s3.amazonaws.com/${newFileName}`

          return Response.json(link);
      }

      
    }

 
  return Response.json(true);
}