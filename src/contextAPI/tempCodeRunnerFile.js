const res =await axios.get(url)
        console.log("apidata stored in res",res)

        const products= await res.data
        console.log("products array fetch from res",products)

        dispatch({type:"MY_API_DATA", payload:products}) //payload--which data is required