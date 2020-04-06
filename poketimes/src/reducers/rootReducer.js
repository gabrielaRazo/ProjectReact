const initState = {
  posts: [
    {
      id: "1",
      title: "Squirtle Laid an Egg",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra purus dapibus tortor eleifend, id dignissim turpis congue. ",
    },
    {
      id: "2",
      title: "Charmander Laid an Egg",
      body:
        "Donec eu varius ipsum, sed pulvinar mauris. Sed mattis eu ligula ut venenatis. In a pulvinar tortor. ",
    },
    {
      id: "3",
      title: "a Helix Fossil was Found",
      body:
        "Praesent pulvinar quis metus quis fermentum. Suspendisse scelerisque ex interdum, pretium neque ac, hendrerit libero. Aliquam tincidunt bibendum porttitor.",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
