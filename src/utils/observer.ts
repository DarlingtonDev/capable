const func = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const post = target.querySelector(".post");
      const hero0 = target.querySelector(".hero0");
      const hero1 = target.querySelector(".hero1");
      const followers = target.querySelector(".followers");
      const liked = target.querySelector(".liked");
      const profile = target.querySelector(".profile");
      post?.classList.remove("opacity-0", "translate-y-1.5");
      post?.classList.add("opacity-100", "translate-y-0");
      followers?.classList.remove("opacity-0", "translate-y-1.5");
      followers?.classList.add("opacity-100", "translate-y-0");
      liked?.classList.remove("opacity-0", "translate-y-1.5");
      liked?.classList.add("opacity-100", "translate-y-0");
      profile?.classList.remove("opacity-0", "translate-y-1.5");
      profile?.classList.add("opacity-100", "translate-y-0");
      hero0?.classList.remove("opacity-0", "-translate-y-1.5");
      hero0?.classList.add("opacity-100", "translate-y-0");
      hero1?.classList.remove("opacity-0", "-translate-y-1.5");
      hero1?.classList.add("opacity-100", "translate-y-0");
    }
  });
};

const option = { threshold: 0.1 };

export const Myobserver = new IntersectionObserver(func, option);
