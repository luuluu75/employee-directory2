import React from 'react';

function Profile(props) {

let profileList = props.profileList;

console.log(profileList)
   return (
    <tbody>
    
       {profileList.map((profile) => (
         <tr 
         key={profile.id.value}>
        <td>
          <img src={profile.picture.medium} alt = "profile pic"/>
        </td>
        <td>{profile.name.first} {profile.name.last}
        </td>
        <td>{profile.phone}</td>
        <td>{profile.email}</td>
        <td>{profile.dob}</td>
       </tr>      
   ))}
   </tbody>
   )};

export default Profile;