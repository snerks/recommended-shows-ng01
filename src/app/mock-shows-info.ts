import { ShowsInfo } from "./models";

export const ShowsInfoResult: ShowsInfo = {
  lastUpdated: new Date(),
  shows: [
    {
      date: new Date("2018-09-17"),
      artists: [
        {
          name: "Chuck Prophet and Stephanie Finch"
        },
        {
          name: "Jesse Malin"
        }
      ],
      venue: "Hen and Chicken",
      isSoldOut: false,
      isCancelled: false
    },
    {
      date: new Date("2018-09-17"),
      artists: [
        {
          name: "Chuck Prophet and Stephanie Finch"
        },
        {
          name: "Jesse Malin"
        }
      ],
      venue: "Hen and Chicken",
      isSoldOut: false,
      isCancelled: false
    }
  ]
};

// {
//     "date": "2018-09-17",
//     "artists": [
//       {
//         "name": "Chuck Prophet and Stephanie Finch"
//       },
//       {
//         "name": "Jesse Malin"
//       }
//     ],
//     "venue": "Hen and Chicken"
//   },

// [
//   { id: 11, name: "Mr. Nice" },
//   { id: 12, name: "Narco" },
//   { id: 13, name: "Bombasto" },
//   { id: 14, name: "Celeritas" },
//   { id: 15, name: "Magneta" },
//   { id: 16, name: "RubberMan" },
//   { id: 17, name: "Dynama" },
//   { id: 18, name: "Dr IQ" },
//   { id: 19, name: "Magma" },
//   { id: 20, name: "Tornado" }
// ];
