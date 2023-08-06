export default async function getUserPosts(userId : string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${userId}`, { next : { revalidate: 60 } } )     

  //{ cache: 'force-cache' }       => once data is fetched hold on to it 
  //{ cache: 'no-store' }          => If the data is changing constantly then use this  
  //{ next : { revalidate: 60 } }  => Will call this api again and again as per the time mentioned (60 secs in this case)


    if(!res.ok) return undefined
  
    return res.json()
  }
  