// constants/i18n.ts

export const translations = {
  fr: {
    home: {
      title: 'Les Histoires des Prophètes',
      subtitle: "L'histoire du prophète Youssef",
      intro: "Découvrez l'incroyable voyage du prophète Youssef (que la paix soit sur lui) à travers un jeu interactif et éducatif pour les enfants.",
      button: 'Commencer le jeu',
    },
    chapter1: {
      title: 'Le Rêve',
      text: 'Le prophète Youssef a raconté un rêve à son père : il a vu onze planètes, le soleil et la lune se prosterner devant lui.',
      button: 'Continuer',
      sun: 'Soleil',
      moon: 'Lune',
      planets: 'Planètes',
      dropZonePrompt: 'Fais glisser le soleil, la lune et les planètes ici.',
    },
    chapter2: {
      title: 'Le Puits',
      // Break the text into an array of strings
      storySegments: [
        'Les frères de Youssef étaient jaloux de lui.', // Segment 1
        "Ils l'ont emmené loin, loin de son père...", // Segment 2
        "...et l'ont jeté dans un puits profond et sombre.", // Segment 3
      ],
      button: 'Continuer',
    },
    // New content for Chapter 3
    chapter3: {
      title: 'Vendu en Égypte',
      storySegments: [
        {
          text: 'Un groupe de voyageurs, une caravane, passa près du puits et trouva Youssef !',
          // image: require('@/assets/images/chapter3_scene1.jpg') // Add image path when ready
        },
        {
          text: "Ils l'emmenèrent avec eux dans leur long voyage vers un pays lointain appelé l'Égypte.",
          // image: require('@/assets/images/chapter3_scene2.jpg') // Add image path when ready
        },
        {
          text: "En Égypte, Youssef fut acheté par un homme important et bon, nommé Al-Aziz, pour l'aider dans sa maison.",
          // image: require('@/assets/images/chapter3_scene3.jpg') // Add image path when ready
        },
      ],
      button: 'Continuer', // Added a button for consistency
    },
    chapter4: {
          title: "La Tentation",
          storySegments: [
            {
              text: "Youssef grandit dans la maison d'Al-Aziz et devint un jeune homme très sage et respectueux.",
              // image: require('@/assets/images/chapter4_scene1.jpg') // Jeune Youssef dans une maison égyptienne
            },
            {
              text: "Mais Zulaykha, la femme d'Al-Aziz, essaya de le pousser à faire quelque chose de mal.",
              // image: require('@/assets/images/chapter4_scene2.jpg') // Scène discrète : Zulaykha parlant à Youssef qui détourne le regard
            },
            {
              text: "Youssef refusa car il craignait Allah. En s'enfuyant, sa chemise se déchira dans son dos.",
              // image: require('@/assets/images/chapter4_scene3.jpg') // Youssef courant, une déchirure visible sur sa chemise (vue de dos)
            },
            {
              text: "La chemise déchirée par derrière montra à Al-Aziz que Youssef était innocent et disait la vérité.",
              // image: require('@/assets/images/chapter4_scene4.jpg') // Al-Aziz examinant la chemise déchirée, Youssef debout calmement
            },
          ],
          button: "Continuer",
        },
    chapter5: {
          title: "La Prison",
          storySegments: [
            {
              text: "Même s'il était innocent, Youssef fut envoyé en prison pour un temps.",
              // image: require('@/assets/images/chapter5_scene1.jpg') // Image: Youssef entrant calmement en prison
            },
            {
              text: "En prison, Youssef était connu pour sa sagesse et sa gentillesse. Il parlait d'Allah aux autres prisonniers.",
              // image: require('@/assets/images/chapter5_scene2.jpg') // Image: Youssef parlant gentiment à d'autres prisonniers
            },
            {
              text: "Deux hommes en prison firent des rêves étranges et demandèrent à Youssef de les expliquer.",
              // image: require('@/assets/images/chapter5_scene3.jpg') // Image: Deux prisonniers parlant à Youssef, l'air perplexe
            },
            {
               // Explains the interpretation simply
              text: "Grâce à Allah, Youssef expliqua leurs rêves : l'un serait libéré et l'autre non.",
              // image: require('@/assets/images/chapter5_scene4.jpg') // Image: Youssef expliquant, un prisonnier a l'air soulagé, l'autre triste/inquiet
            },
          ],
          button: "Continuer",
        },
    chapter6: {
          title: "Le Rêve du Roi",
          storySegments: [
            {
              text: "Le Roi d'Égypte fit un rêve étrange : sept vaches maigres mangeaient sept vaches grasses.",
              // image: require('@/assets/images/chapter6_scene1.jpg') // Image: Roi pensif, rêve de vaches
            },
            {
              text: "Personne ne pouvait expliquer ce rêve. Le prisonnier libéré se souvint alors de Youssef et de son don.",
              // image: require('@/assets/images/chapter6_scene2.jpg') // Image: Prisonnier parlant au Roi
            },
            {
              text: "Youssef fut sorti de prison. Il expliqua le rêve grâce à Allah : il y aurait sept années d'abondance suivies de sept années de famine.",
              // image: require('@/assets/images/chapter6_scene3.jpg') // Image: Youssef expliquant le rêve au Roi
            },
            {
              text: "Youssef conseilla aussi au Roi de stocker de la nourriture pendant les bonnes années pour se préparer.",
              // image: require('@/assets/images/chapter6_scene4.jpg') // Image: Youssef donnant des conseils, peut-être devant des silos/greniers
            },
          ],
          button: "Continuer",
        },
    chapter7: {
      title: "Au Pouvoir",
      storySegments: [
        {
          text: "Le Roi fut très impressionné par la sagesse et l'honnêteté de Youssef.",
          // image: require('@/assets/images/youssef/chapter7_scene1.png')
        },
        {
          text: "Il nomma Youssef gardien des trésors de l'Égypte pour gérer les récoltes.",
          // image: require('@/assets/images/youssef/chapter7_scene2.png')
        },
        {
          text: "Youssef travailla dur et remplit les greniers pendant les sept années d'abondance.",
          // image: require('@/assets/images/youssef/chapter7_scene3.png')
        },
      ],
      button: "Continuer",
    },
    chapter8: {
      title: "Les Retrouvailles",
      storySegments: [
        {
          text: "La famine toucha aussi le pays de Canaan, où vivaient Jacob et ses fils.",
          // image: require('@/assets/images/youssef/chapter8_scene1.png')
        },
        {
          text: "Les frères de Youssef vinrent en Égypte pour acheter de la nourriture. Ils entrèrent chez lui.",
          // image: require('@/assets/images/youssef/chapter8_scene2.png')
        },
        {
          text: "Youssef les reconnut tout de suite, mais eux ne le reconnurent pas. Il leur donna des provisions.",
          // image: require('@/assets/images/youssef/chapter8_scene3.png')
        },
      ],
      button: "Continuer",
    },
    chapter9: {
      title: "La Famille Réunie",
      storySegments: [
        {
          text: "Le Prophète Yaacoub et toute sa famille quittèrent Canaan pour venir habiter en Égypte.",
          // image: require('@/assets/images/youssef/chapter9_scene1.png')
        },
        {
          text: "Youssef accueillit ses parents et ses frères avec une immense joie et beaucoup d'amour.",
          // image: require('@/assets/images/youssef/chapter9_scene2.png')
        },
        {
          text: "Le rêve de Youssef se réalisa enfin : toute la famille était réunie dans le bien et la paix, remerciant Allah.",
          // image: require('@/assets/images/youssef/chapter9_scene3.png')
        },
      ],
      button: "Retour à l'accueil",
    },
  },
  ar: {
    home: {
      title: 'قصص الأنبياء',
      subtitle: 'قصة النبي يوسف',
      intro: 'اكتشف رحلة النبي يوسف (عليه السلام) المذهلة من خلال لعبة تفاعلية وتعليمية للأطفال.',
      button: 'ابدأ اللعبة',
    },
    chapter1: {
      title: 'الرؤيا',
      text: 'حكى النبي يوسف لوالده رؤيا: رأى أحد عشر كوكبًا والشمس والقمر يسجدون له.',
      button: 'استمر',
      sun: 'الشمس',
      moon: 'القمر',
      planets: 'الكواكب',
      dropZonePrompt: 'اسحب الشمس والقمر والكواكب هنا.',
    },
    chapter2: {
      title: 'البئر',
      storySegments: [
        'كان إخوة يوسف يغارون منه.', // Segment 1
        'أخذوه بعيدًا، بعيدًا عن أبيه...', // Segment 2
        '...وألقوه في بئر عميق ومظلم.', // Segment 3
      ],
      button: 'استمر', // Button text (appears after last segment)
    },
    // New content for Chapter 3
    chapter3: {
      title: 'بيع يوسف في مصر',
      storySegments: [
        {
          text: 'مرت قافلة من المسافرين بالقرب من البئر ووجدوا يوسف!',
          // image: require('@/assets/images/chapter3_scene1.jpg') // Add image path when ready
        },
        {
          text: 'أخذوه معهم في رحلتهم الطويلة إلى بلد بعيد يسمى مصر.',
          // image: require('@/assets/images/chapter3_scene2.jpg') // Add image path when ready
        },
        {
          text: 'في مصر، اشترى يوسف رجل مهم وطيب اسمه العزيز، ليساعده في بيته.',
          // image: require('@/assets/images/chapter3_scene3.jpg') // Add image path when ready
        },
      ],
      button: 'استمر', // Added a button for consistency
    },
    chapter4: {
          title: "المراودة", // Ou "الإغواء" si préféré
          storySegments: [
            {
              text: "كبر يوسف في بيت العزيز وأصبح شابًا حكيمًا ومحترمًا جدًا.",
              // image: require('@/assets/images/chapter4_scene1.jpg') // نفس الصورة
            },
            {
              text: "لكن زليخة، زوجة العزيز، حاولت دفعه لفعل شيء سيء.",
              // image: require('@/assets/images/chapter4_scene2.jpg') // نفس الصورة
            },
            {
              text: "رفض يوسف لأنه كان يخاف الله. وعندما هرب، تمزق قميصه من الخلف.",
              // image: require('@/assets/images/chapter4_scene3.jpg') // نفس الصورة
            },
            {
              text: "القميص الممزق من الخلف أظهر للعزيز أن يوسف كان بريئًا ويقول الحقيقة.",
              // image: require('@/assets/images/chapter4_scene4.jpg') // نفس الصورة
            },
          ],
          button: "استمر",
        },
    chapter5: {
          title: "السجن",
          storySegments: [
            {
              text: "رغم أنه كان بريئًا، أُرسل يوسف إلى السجن لبعض الوقت.",
              // image: require('@/assets/images/chapter5_scene1.jpg') // نفس الصورة
            },
            {
              text: "في السجن، عُرف يوسف بحكمته ولطفه. كان يحدث السجناء الآخرين عن الله.",
              // image: require('@/assets/images/chapter5_scene2.jpg') // نفس الصورة
            },
            {
              text: "رأى رجلان في السجن أحلامًا غريبة وطلبوا من يوسف أن يشرحها لهم.",
              // image: require('@/assets/images/chapter5_scene3.jpg') // نفس الصورة
            },
            {
              // Explains the interpretation simply
              text: "بفضل الله، شرح يوسف أحلامهم: واحد سيخرج من السجن والآخر لا.",
              // image: require('@/assets/images/chapter5_scene4.jpg') // نفس الصورة
            },
          ],
          button: "استمر",
        },
    chapter6: {
          title: "رؤيا الملك",
          storySegments: [
            {
              text: "رأى ملك مصر حلمًا غريبًا: سبع بقرات هزيلة تأكل سبع بقرات سمينة.",
              // image: require('@/assets/images/chapter6_scene1.jpg') // نفس الصورة
            },
            {
              text: "لم يستطع أحد تفسير الحلم. فتذكر السجين الذي أُطلق سراحه يوسف وموهبته.",
              // image: require('@/assets/images/chapter6_scene2.jpg') // نفس الصورة
            },
            {
              text: "أُخرج يوسف من السجن. وبفضل الله، شرح الحلم: ستكون هناك سبع سنوات من الرخاء تليها سبع سنوات من الجفاف.",
              // image: require('@/assets/images/chapter6_scene3.jpg') // نفس الصورة
            },
            {
               text: "نصح يوسف الملك أيضًا بتخزين الطعام خلال السنوات الجيدة للاستعداد للسنوات الصعبة.",
              // image: require('@/assets/images/chapter6_scene4.jpg') // نفس الصورة
            },
          ],
          button: "استمر",
        },
    chapter7: {
      title: "في السلطة",
      storySegments: [
        {
          text: "أعجب الملك بشدة بحكمة يوسف وصدقه.",
          // image: require('@/assets/images/youssef/chapter7_scene1.png')
        },
        {
          text: "عين الملك يوسف مسؤولاً عن خزائن مصر ليدير المحاصيل.",
          // image: require('@/assets/images/youssef/chapter7_scene2.png')
        },
        {
          text: "عمل يوسف بجد وملأ المخازن بالطعام خلال سنوات الرخاء السبع.",
          // image: require('@/assets/images/youssef/chapter7_scene3.png')
        },
      ],
      button: "استمر",
    },
    chapter8: {
      title: "اللقاء",
      storySegments: [
        {
          text: "وصلت المجاعة أيضًا إلى أرض كنعان، حيث يعيش يعقوب وأبناؤه.",
          // image: require('@/assets/images/youssef/chapter8_scene1.png')
        },
        {
          text: "جاء إخوة يوسف إلى مصر لشراء الطعام ودخلوا عليه.",
          // image: require('@/assets/images/youssef/chapter8_scene2.png')
        },
        {
          text: "عرفهم يوسف فورًا، لكنهم لم يعرفوه. وأعطاهم ما يحتاجون من الطعام.",
          // image: require('@/assets/images/youssef/chapter8_scene3.png')
        },
      ],
      button: "استمر",
    },
    chapter9: {
      title: "لم شمل العائلة",
      storySegments: [
        {
          text: "غادر النبي يعقوب وعائلته كنعان ليعيشوا في مصر.",
          // image: require('@/assets/images/youssef/chapter9_scene1.png')
        },
        {
          text: "استقبل يوسف والديه وإخوته بفرح كبير وحب غامر.",
          // image: require('@/assets/images/youssef/chapter9_scene2.png')
        },
        {
          text: "تحقق حلم يوسف أخيرًا: اجتمعت العائلة كلها في خير وسلام، شاكرين الله.",
          // image: require('@/assets/images/youssef/chapter9_scene3.png')
        },
      ],
      button: "العودة للرئيسية",
    },
  },
};