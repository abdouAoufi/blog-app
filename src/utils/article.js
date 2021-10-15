export const templateArticle = {
  title: "Confused About rem and em units in CSS?",
  imageHeaderUrl:
    "https://res.cloudinary.com/practicaldev/image/fetch/s--riWbfIc6--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ddjqvuwkpuocldrylav2.png",
  summary:
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae in,\
    possimus error saepe placeat, repellat sequi, voluptatibus odit voluptate\
    ipsa nulla ullam ratione!",
  tags: [{ name: "front-end" }, { name: "css" }, { name: "css-units" }],
  conclusion:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus incidunt\
    explicabo cupiditate animi molestias, error odio neque optio eaque odit.",
  articleinfo: {
    timeReading: 5,
    topic: "Web developement",
  },
  content: {
    data: [
      {
        paragraph:
          "rem and em units in CSS is creating confusion for beginners,\
          Most beginners don't understand the correct meaning of both units and then use them without thinking much and it creates lots of problems for them.\
          em and rem both are known as relative units in CSS.\
          You've probably been using em and rem units now for a while already, but still, you might be confused about which unit is best in which scenario.",
        imageUrl:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.x3eQ0WknsCLHiRLl5jGYowHaEr%26pid%3DApi&f=1",
      },
      {
        paragraph: `An em value is equal to the computed font size of the parent of that element. example if font size of parent element is 20 px then 1em is equal to 20px.
          if the font size is not specified in the parent element then it will look continues up until the root element.
          Root element font size is provided by the browser and by default it is 16px.\
          in this case, 1em is equal to 16px.`,
      },
    ],
  },
};
