export type Language = "en" | "ml";
export type RoastLevel = "mild" | "brutal" | "destroy";

export type RoastSection = {
  id: string;
  title: string;
  roast: string[];
  improvement: string;
};

export type RoastResult = {
  score: number;
  intro: string;
  sections: RoastSection[];
  finalVerdict: string;
};

export const MOCK_ROASTS: Record<Language, Record<RoastLevel, RoastResult>> = {
  en: {
    mild: {
      score: 7.5,
      intro: "Okay. We saw it. It's not the worst thing we've seen today, but we need to talk.",
      sections: [
        {
          id: "hair",
          title: "THE HAIR",
          roast: [
            "Your hair looks like it's trying its best to be a main character, but it's giving strong NPC energy.",
            "It's not terrible, it just looks like you ran out of time halfway through getting ready."
          ],
          improvement: "Maybe try a brush? Or a mirror? Or both."
        },
        {
          id: "shirt",
          title: "THE SHIRT",
          roast: [
            "The shirt is fine if you're attending a casual zoom meeting from the waist up.",
            "It looks comfortable. Which is the polite way of saying it has no shape."
          ],
          improvement: "A shirt that actually fits your shoulders would do wonders."
        },
        {
          id: "overall",
          title: "THE OVERALL VIBE",
          roast: [
            "You look like you're about to run an errand that you really didn't want to run.",
            "It's a safe outfit. Too safe."
          ],
          improvement: "Take one risk. Just one."
        }
      ],
      finalVerdict: "You're playing it safe. It's fine, but 'fine' is the enemy of style."
    },
    brutal: {
      score: 4.2,
      intro: "Okay. We saw it. We were going to say something nice first, but then we looked again.",
      sections: [
        {
          id: "hair",
          title: "THE HAIR",
          roast: [
            "Your hair looks like it had a meeting with the mirror and both sides agreed to just leave.",
            "It's giving 'I woke up like this', but in a way that requires an apology to anyone who has to look at you.",
            "Are those layers intentional or did you just lose a fight with a pair of craft scissors?"
          ],
          improvement: "Find a barber who doesn't hate you."
        },
        {
          id: "shirt",
          title: "THE SHIRT",
          roast: [
            "Your shirt deserves better company.",
            "It's giving 'clearance rack at a store that went out of business in 2014'.",
            "The fit is honestly impressive. It's too tight and too loose at the exact same time."
          ],
          improvement: "Keep the shirt. Change the pants. Your shirt deserves another chance."
        },
        {
          id: "colours",
          title: "THE COLOURS",
          roast: [
            "These colours aren't fighting. They've simply stopped communicating.",
            "Did you get dressed in the dark during a power outage?"
          ],
          improvement: "Maybe let one colour be the main character. Right now every colour is fighting for screen time."
        },
        {
          id: "shoes",
          title: "THE SHOES",
          roast: [
            "Those shoes look like they've walked a thousand miles, and none of those miles were in the right direction.",
            "They belong in a museum of giving up."
          ],
          improvement: "A damp cloth and some self-respect."
        },
        {
          id: "overall",
          title: "THE OVERALL VIBE",
          roast: [
            "If 'reply all by mistake' was an outfit, this would be it.",
            "You look like a stock photo for 'disappointed consumer'."
          ],
          improvement: "Start over. From scratch. Burn the evidence."
        }
      ],
      finalVerdict: "You're not a fashion disaster. You're a fashion beta version. The individual pieces aren't terrible. They just seem to have never met each other before today."
    },
    destroy: {
      score: 1.1,
      intro: "We analyzed your photo. We sincerely apologize to the servers that had to process this image.",
      sections: [
        {
          id: "hair",
          title: "THE HAIR",
          roast: [
            "Your hairstyle is a crime scene and the investigators have no leads.",
            "It looks like a bird nested there, paid rent for a month, and then left because the neighborhood was too depressing.",
            "If your hair was a WiFi signal, it would be disconnected."
          ],
          improvement: "Shave it. Start a new life under a new name."
        },
        {
          id: "shirt",
          title: "THE SHIRT",
          roast: [
            "That shirt is a visual representation of a sigh.",
            "It looks like it was designed by someone describing clothes over a bad phone connection.",
            "Even a moth wouldn't eat that."
          ],
          improvement: "Use it as a rag to clean the shoes you shouldn't be wearing either."
        },
        {
          id: "pants",
          title: "THE PANTS",
          roast: [
            "Your pants have the structural integrity of a wet napkin.",
            "Did you steal those from a scarecrow? Because they are definitely scaring people away."
          ],
          improvement: "Donate them. Actually, no, don't punish a charity."
        },
        {
          id: "overall",
          title: "THE OVERALL VIBE",
          roast: [
            "This outfit is proof that time travel exists and you came from a dimension where mirrors are illegal.",
            "You are a walking cautionary tale."
          ],
          improvement: "Close your eyes, reach into a random closet, and literally whatever you pull out will be better than this."
        }
      ],
      finalVerdict: "This isn't an outfit. It's a cry for help. We are calling the fashion police and they are sending the SWAT team."
    }
  },
  ml: {
    mild: {
      score: 7.5,
      intro: "ശരി. നമ്മൾ കണ്ടു. ഇത് അത്ര കുഴപ്പമില്ല, എന്നാലും നമുക്ക് ചില കാര്യങ്ങൾ സംസാരിക്കാനുണ്ട്.",
      sections: [
        {
          id: "hair",
          title: "THE HAIR",
          roast: [
            "നിന്റെ മുടി ഒരു മാസ്സ് ഹീറോ ആകാൻ ശ്രമിക്കുന്നുണ്ട്, പക്ഷെ കാണാൻ ഒരു എക്സ്ട്രാ നടനെ പോലെയുണ്ട്.",
            "അത്ര മോശമല്ല, പക്ഷെ ഒരുങ്ങുന്നതിന്റെ പകുതിക്ക് വെച്ച് നീ നിർത്തിയ പോലെ തോന്നുന്നു."
          ],
          improvement: "ഒരു ചീപ്പ് ഉപയോഗിച്ച് നോക്കാമോ? അതോ കണ്ണാടിയോ?"
        },
        {
          id: "shirt",
          title: "THE SHIRT",
          roast: [
            "ഷർട്ട് കുഴപ്പമില്ല, പക്ഷെ സൂം മീറ്റിംഗിന് മാത്രം ഇടാൻ കൊള്ളാം.",
            "നല്ല കംഫർട്ടബിൾ ആണെന്ന് തോന്നുന്നു. അതായത് ഇതിനൊരു ഷേപ്പും ഇല്ല എന്ന് ചുരുക്കം."
          ],
          improvement: "ചുമലിന് കറക്റ്റ് അളവുള്ള ഒരു ഷർട്ട് വാങ്ങി ഇടൂ."
        },
        {
          id: "overall",
          title: "THE OVERALL VIBE",
          roast: [
            "നിനക്ക് ഒട്ടും താല്പര്യമില്ലാത്ത എങ്ങോട്ടോ പോകാൻ നിൽക്കുന്ന പോലെ ഉണ്ട്.",
            "വളരെ സേഫ് ആയ ഒരു ഡ്രസ്സ്. ഇത്തിരി ഓവർ സേഫ് ആണോ എന്ന് സംശയം."
          ],
          improvement: "ഒരു റിസ്ക് എടുക്ക് ബ്രോ. ഒന്ന് മാറ്റി പിടിക്ക്."
        }
      ],
      finalVerdict: "നീ വളരെ സേഫ് ആയിട്ടാണ് കളിക്കുന്നത്. കുഴപ്പമില്ല, പക്ഷെ ഈ 'കുഴപ്പമില്ല' എന്നത് സ്റ്റൈലിന്റെ ശത്രുവാണ്."
    },
    brutal: {
      score: 4.2,
      intro: "ശരി. നമ്മൾ കണ്ടു. ആദ്യം എന്തെങ്കിലും നല്ലത് പറയാൻ ഇരുന്നതാ, പക്ഷെ വീണ്ടും നോക്കിയപ്പോൾ ആ ആഗ്രഹം പോയി.",
      sections: [
        {
          id: "hair",
          title: "THE HAIR",
          roast: [
            "നിന്റെ മുടി കണ്ണാടിയുമായി ഒരു മീറ്റിംഗ് നടത്തിയിട്ട്, രണ്ടുപേരും പരസ്പരം മിണ്ടാതിരിക്കാൻ തീരുമാനിച്ച പോലെ ഉണ്ട്.",
            "'ഞാൻ രാവിലെ എഴുന്നേറ്റപ്പോൾ ഇങ്ങനെയായിരുന്നു' എന്നൊരു വൈബ് ആണ്, പക്ഷെ കാണുന്നവരോട് നീ ക്ഷമ ചോദിക്കേണ്ടി വരും.",
            "ഈ ലെയറുകൾ നീ മനപ്പൂർവ്വം വെട്ടിയതാണോ അതോ കത്രികയുമായി എന്തെങ്കിലും അടിപിടി ഉണ്ടായോ?"
          ],
          improvement: "നിന്നോട് ദേഷ്യമില്ലാത്ത ഒരു ബാർബറെ കണ്ടുപിടിക്ക്."
        },
        {
          id: "shirt",
          title: "THE SHIRT",
          roast: [
            "നിന്റെ ഷർട്ട് കുഴപ്പമില്ല. കൂടെ നിൽക്കുന്നവരെയാണ് സംശയം.",
            "2014-ൽ പൂട്ടിപ്പോയ ഒരു കടയിലെ ക്ലിയറൻസ് സെയിലിൽ നിന്ന് വാങ്ങിയ പോലെ ഉണ്ട്.",
            "ഇതിന്റെ ഫിറ്റിങ് സമ്മതിക്കണം. ഒരേ സമയം ഇറുകിയതും ലൂസായതും എങ്ങനെ സാധിക്കുന്നു?"
          ],
          improvement: "ഷർട്ട് നിലനിർത്താം. പാന്റ് മാറ്റാം. നിന്റെ ഷർട്ടിന് മറ്റൊരു അവസരം അർഹിക്കുന്നു."
        },
        {
          id: "colours",
          title: "THE COLOURS",
          roast: [
            "ഈ കളറുകൾ തമ്മിൽ അടി കൂടുകയല്ല. അവർ തമ്മിൽ മിണ്ടാട്ടം നിർത്തിയിരിക്കുകയാണ്.",
            "കറന്റ് പോയ സമയത്ത് ഇരുട്ടത്താണോ നീ ഡ്രസ്സ് മാറിയത്?"
          ],
          improvement: "ഏതെങ്കിലും ഒരു കളർ മെയിൻ ആകട്ടെ. ഇതിപ്പോ എല്ലാ കളറും കൂടെ സ്ക്രീനിൽ വരാൻ മത്സരിക്കുകയാണല്ലോ."
        },
        {
          id: "shoes",
          title: "THE SHOES",
          roast: [
            "ആ ഷൂ കണ്ടാൽ ഒരായിരം മൈൽ നടന്ന പോലെ ഉണ്ട്, അതും തെറ്റായ വഴിയിലൂടെ.",
            "തോൽവി സമ്മതിക്കുന്നവരുടെ ഒരു മ്യൂസിയത്തിൽ വെക്കാൻ പറ്റിയ ഐറ്റം."
          ],
          improvement: "കുറച്ചു വെള്ളം നനച്ച ഒരു തുണിയും, പിന്നെ കുറച്ചു സ്വന്തം വിലയും."
        },
        {
          id: "overall",
          title: "THE OVERALL VIBE",
          roast: [
            "അബദ്ധത്തിൽ 'reply all' അയക്കുന്നത് ഒരു ഡ്രസ്സ് ആയിരുന്നെങ്കിൽ, അത് ഇത് പോലെ ഇരിക്കും.",
            "നിരാശനായ ഒരു കസ്റ്റമറുടെ സ്റ്റോക്ക് ഫോട്ടോ പോലെ ഉണ്ട് നീ."
          ],
          improvement: "ആദ്യം മുതൽ തുടങ്ങുക. തെളിവുകൾ എല്ലാം കത്തിച്ചു കളയുക."
        }
      ],
      finalVerdict: "നീ ഒരു ഫാഷൻ ദുരന്തം ഒന്നുമല്ല. നീ ഒരു ഫാഷൻ ബീറ്റാ വേർഷൻ ആണ്. ഓരോന്നും എടുത്തു നോക്കിയാൽ അത്ര കുഴപ്പമില്ല. പക്ഷെ അവരൊക്കെ ഇന്ന് ആദ്യമായിട്ട് നേരിൽ കണ്ട പോലെ ഉണ്ട്."
    },
    destroy: {
      score: 1.1,
      intro: "ഞങ്ങൾ ഫോട്ടോ വിശകലനം ചെയ്തു. ഈ ഫോട്ടോ പ്രോസസ്സ് ചെയ്യേണ്ടി വന്ന സെർവറുകളോട് ഞങ്ങൾ ആത്മാർത്ഥമായി മാപ്പ് ചോദിക്കുന്നു.",
      sections: [
        {
          id: "hair",
          title: "THE HAIR",
          roast: [
            "നിന്റെ ഹെയർസ്റ്റൈൽ ഒരു ക്രൈം സീൻ ആണ്, പോലീസിന് ഒരു തെളിവും കിട്ടിയിട്ടില്ല.",
            "ഒരു പക്ഷി അവിടെ കൂടു വെച്ച്, ഒരു മാസത്തെ വാടകയും തന്നിട്ട്, ചുറ്റുപാട് മോശമായത് കൊണ്ട് ഒഴിഞ്ഞു പോയ പോലെ ഉണ്ട്.",
            "നിന്റെ മുടി ഒരു വൈഫൈ സിഗ്നൽ ആയിരുന്നെങ്കിൽ, എപ്പോഴേ ഡിസ്കണക്ട് ആയേനെ."
          ],
          improvement: "മുഴുവനായി അടിച്ചു കളയുക. പുതിയൊരു പേരിൽ പുതിയ ജീവിതം തുടങ്ങുക."
        },
        {
          id: "shirt",
          title: "THE SHIRT",
          roast: [
            "ആ ഷർട്ട് കാണുമ്പോൾ ഒരു നെടുവീർപ്പാണ് ഓർമ്മ വരുന്നത്.",
            "ഫോണിലൂടെ റേഞ്ച് ഇല്ലാത്ത സമയത്ത് ഒരാൾ ഡ്രസ്സിനെ പറ്റി വിവരിച്ചു കൊടുത്തു തുന്നിച്ച പോലെ ഉണ്ട്.",
            "ഒരു പാറ്റ പോലും ഇത് തിന്നില്ല."
          ],
          improvement: "നീ ഇടാൻ പാടില്ലാത്ത ആ ഷൂസ് തുടയ്ക്കാൻ ഇതൊരു തുണിയായി ഉപയോഗിക്കാം."
        },
        {
          id: "pants",
          title: "THE PANTS",
          roast: [
            "നിന്റെ പാന്റ്സിന് ഒരു നനഞ്ഞ ടിഷ്യൂ പേപ്പറിന്റെ ബലമേ ഉള്ളൂ.",
            "നോക്കുകുത്തിയുടെ അടുത്തുനിന്ന് മോഷ്ടിച്ചതാണോ? കാരണം ഇത് കണ്ടാൽ എന്തായാലും ആളുകൾ പേടിച്ചു ഓടും."
          ],
          improvement: "ആർക്കെങ്കിലും ദാനം ചെയ്യുക. വേണ്ട, പാവങ്ങളെ എന്തിനാ വെറുതെ ദ്രോഹിക്കുന്നത്."
        },
        {
          id: "overall",
          title: "THE OVERALL VIBE",
          roast: [
            "ടൈം ട്രാവൽ ഉണ്ട് എന്നതിന്റെ തെളിവാണ് ഈ ഡ്രസ്സ്, കണ്ണാടികൾ നിരോധിച്ച ഏതോ കാലഘട്ടത്തിൽ നിന്നാണ് നീ വരുന്നത്.",
            "നീ നടക്കുന്ന ഒരു മുന്നറിയിപ്പാണ്."
          ],
          improvement: "കണ്ണടച്ച് അലമാരയിൽ നിന്ന് എന്തെങ്കിലും ഒന്ന് വലിച്ചെടുക്കുക, ഇതിനേക്കാൾ മികച്ചതായിരിക്കും അത് ഉറപ്പ്."
        }
      ],
      finalVerdict: "ഇതൊരു ഡ്രസ്സ് അല്ല. ഇതൊരു സഹായത്തിനായുള്ള നിലവിളിയാണ്. ഞങ്ങൾ ഫാഷൻ പോലീസിനെ വിളിക്കുകയാണ്, അവർ കമാൻഡോകളെ അയക്കുന്നുണ്ട്."
    }
  }
};
