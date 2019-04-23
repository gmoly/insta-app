export default class InstagramService {

    _apiBase = 'https://api.instagram.com/v1/users/self';
    _tokenParam='?access_token=';
  
    getResource = async (url, token) => {
      const res = await fetch(`${this._apiBase}${url}${this._tokenParam}${token}`);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${url} with token ${token}` +
          `, received ${res.status}`)
      }
      return await res.json();
    };

    getProfileInfo = async (token) => {
        const info = await this.getResource(`/`,token);
        return this._transformProfileInfo(info);
      };

      getProfileItems = async (token) => {
        const contents = await this.getResource(`/media/recent`,token);
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
          carusel: item.carusel_media,
          description: item.caption.text,
          creationTime: item.caption.creation_time
        };
      };
}