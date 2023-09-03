export function getImageUrl(person, size = 's'){
    return(
      'https://pbs.twimg.com/profile_banners/2425231/1585584342/1500x500' + 
      person.imageId + 
      size + 
      '.jpg'
    );
}