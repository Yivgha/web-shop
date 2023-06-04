// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";

// const PlacesAutocomplete = ({ setSelectedPlace }) => {
//   const {
//     ready,
//     value,
//     setValue,
//     suggestions: { status, data },
//     clearSuggestions,
//   } = usePlacesAutocomplete();

//   const handleSelect = async (address) => {
//     setValue(address, false);
//     clearSuggestions();

//     const results = await getGeocode({ address });
//     const { lat, lng } = await getLatLng(results[0]);
//     setSelectedPlace({ lat, lng });
//   };

//   return (
//     <div onSelect={handleSelect}>
//       <input
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         disabled={!ready}
//         className="combobox-input"
//         placeholder="Search an address"
//       />
//       <div>
//         <ul>
//           {status === "OK" &&
//             data.map(({ place_id, description }) => (
//               <li key={place_id} value={description} />
//             ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default PlacesAutocomplete;