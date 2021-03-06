export default class InstagramService {

    _apiBase = process.env.REACT_APP_API_BASE;
    _tokenParam=process.env.REACT_APP_TOKEN_PARAM;
  
    getResource = async (url, token) => {
      const res = await fetch(`${this._apiBase}${url}${this._tokenParam}${token}`);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${url} with token ${token}` +
          `, received ${res.status}`)
      }
      return await res.json();
    };

      getProfileInfo = async (token, userId) => {
        const user = userId ? userId : 'self'
        const info = await this.getResource(`/`+user,token);
        return this._transformProfileInfo(info);
      };

      getProfileItems = async (token, last_id) => {
        var param = token + "&count=6" 
        if (last_id !== null) {
          param += "&max_id=" + last_id;
        }
        const contents = await this.getResource(`/self/media/recent`,param);
        return contents.data.map(this._transformProfileContents);
      };

      _transformProfileInfo = ( {data} ) => {
        return {
          id: data.id,
          nick: data.username,
          name: data.full_name,
          logo: data.profile_picture
        };
      };

      _transformProfileContents = (item) => {
        return {
          id: item.id,
          location: item.location,
          images: item.images,
          carousel: item.carousel_media,
          description: item.caption.text,
          creationTime: item.caption.creation_time
        };
      };
}