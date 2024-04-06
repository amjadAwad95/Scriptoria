import axios from 'axios'
const getReadingLists = async (token) =>{
    try {
        const response = await axios({
            url: "http://localhost:5000/readingLists",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + token,
            },
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}

const createReadingList = async (list, token) =>{
    try{
        await axios({
            url : "http://localhost:5000/readingLists",
            method : "POST",
            headers : {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + token,
            },
            data : list
        })
    }catch(error){
        console.log(error)
    }
}

const getStoriesFromRL = async (_id, token)=>{
    try{
        const response = await axios({
            url: "http://localhost:5000/readingLists/" + _id,
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + token,
            },
            params : {
                _id
            }
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}

const updateList = async (id, stories, token) =>{
    try{
        await axios({
            url : "http://localhost:5000/readingLists/" + id,
            method : "PATCH",
            headers : {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + token,
            },
            data : {stories}
        })
    }catch(error){
        console.log(error)
    }
}

const updateReadingLists = async (storyId, checkedLists, token) =>{
    
    const response = await getReadingLists(token);
  
  if (!response || !response.data) {
    console.error('getReadingLists did not return expected data');
    return;
  }
  
  const lists = response.data;

    try {
            await Promise.all(
              lists.map(async (list) => {
                let stories = list.stories
                if(checkedLists.includes(list._id)){
                    if(!stories.includes(storyId)){
                        stories.push(storyId)
                        await updateList(list._id, stories,token)
                    }
                } else {
                    if(stories.includes(storyId)) {
                        stories = stories.filter(story => story !== storyId)
                        await updateList(list._id, stories,token)
                    }
                }
              })
            );
        } catch (error) {
        console.error(error);
        }
}

export {
    getReadingLists,
    createReadingList,
    updateReadingLists,
    getStoriesFromRL
}

