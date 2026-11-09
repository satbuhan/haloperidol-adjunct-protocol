// content.js — Choosing an adjunct to haloperidol in hyperactive delirium with
// severe agitation (excited delirium syndrome): a clinical decision algorithm.
// Data only. Rendering logic lives in app.js.
// Co-authored by Dr. Özgür Karcıoğlu and Dr. Satuk Buğra Han Bozatlı.
// Source: Figure 2 of the manuscript "Midazolam versus Ketamine as Adjuncts to
// Haloperidol in Excited Delirium Syndrome (Hyperactive Delirium with Severe
// Agitation): A Systematic Review of Two Decades of Evidence" — a PRISMA
// systematic review of 12 comparative studies (n = 2,180) on the choice of
// midazolam vs ketamine as the adjunct added to a haloperidol backbone. See
// METHODOLOGY.md for the fidelity rules this file follows: label/sub text is
// byte-for-byte as authored; meaning/rationale/cautions/refs are added
// research drawn from the manuscript's own text and tables.
//
// WORKFLOW NOTE: this manuscript was condensed by an external AI (Gemini)
// from the full text, using this project's structured condensation prompt
// (tools/gemini-condensation-prompt.md in the hub repo, v2 — rewritten after
// an earlier build's output wasn't valid Markdown). This tool was built
// directly from that condensed document plus the authors' own standalone
// Figure 2 image.
//
// REFERENCES — verification policy for this tool (a deliberate,
// author-directed exception, not an oversight — the THIRD tool in this
// atlas to carry this exception, after epinephrine-revisited-protocol and
// ketamine-indications-protocol): by explicit author instruction, this
// 74-entry bibliography is transcribed directly from the manuscript's own
// reference list (via the Gemini condensation) and was NOT independently
// re-verified against primary sources for this build. Dr. Karcıoğlu has
// already evaluated the manuscript's references, and the external AI's own
// condensation pass was also treated by the author as a check — both are
// accepted here as correct on that basis, explicitly to keep this build's
// workload to a minimum. Every entry's kind field states this plainly: "As
// cited in the manuscript; not independently re-verified." DOIs are
// reproduced as given in the manuscript's reference list. This is the
// opposite default from most tools in this atlas, where every reference IS
// independently re-verified — see e.g. ccb-toxicity-protocol's content.js
// for a tool where all 80 references were checked one by one. Readers who
// need primary-source-verified citations should treat this tool's
// references as manuscript-sourced, not independently confirmed.
//
// RENDERING NOTE on the "rescue" node: the authors' own Figure 2 draws a
// loop-back arrow from the Rescue box up to the Reassessment node. This
// atlas's rendering engine (app.js, shared across every tool) only ever
// draws a forward edge from a node's bottom to a later node's top — there
// is no support anywhere in the atlas for a genuine backward/upward SVG
// edge, and adding one here would need new, untested renderer logic.
// "rescue" is therefore rendered as a visual dead end (no outgoing EDGES
// entry in app.js), and the loop-back semantics are conveyed entirely
// through its own meaning/rationale text instead.

const REFERENCES = [
  {
    id: 1,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Gonin, P., Beysard, N., Yersin, B. and Carron, P.N. (2018) 'Excited delirium: a systematic review', Academic Emergency Medicine, 25(5), pp. 552-565.",
    url: "https://doi.org/10.1111/acem.13330"
  },
  {
    id: 2,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "McGuinness, T. and Lipsedge, M. (2022) 'Excited delirium, acute behavioural disturbance, death and diagnosis', Psychological Medicine, 52(9), pp. 1601-1611.",
    url: "https://doi.org/10.1017/S0033291722001076"
  },
  {
    id: 3,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "American College of Emergency Physicians Clinical Policies Subcommittee (Writing Committee) on Severe Agitation (2024) 'Clinical policy: critical issues in the evaluation and management of adult out-of-hospital or emergency department patients presenting with severe agitation', Annals of Emergency Medicine, 83(1), pp. e1-e30.",
    url: "https://doi.org/10.1016/j.annemergmed.2023.09.010"
  },
  {
    id: 4,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Wilson, M.P., Pepper, D., Currier, G.W., Holloman, G.H. Jr and Feifel, D. (2012) 'The psychopharmacology of agitation: consensus statement of the American Association for Emergency Psychiatry Project BETA psychopharmacology workgroup', Western Journal of Emergency Medicine, 13(1), pp. 26-34.",
    url: "https://doi.org/10.5811/westjem.2011.9.6866"
  },
  {
    id: 5,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Luz, M., Brandao Barreto, B., de Castro, R.E.V., Salluh, J., Dal-Pizzol, F., Araujo, C., De Jong, A., Chanques, G., Myatra, S.N., Tobar, E., Gimenez-Esparza Vich, C., Carini, F., Ely, E.W., Stollings, J.L., Drumright, K., Kress, J., Povoa, P., Shehabi, Y., Mphandi, W. and Gusmao-Flores, D. (2022) 'Practices in sedation, analgesia, mobilization, delirium, and sleep deprivation in adult intensive care units (SAMDS-ICU): an international survey before and during the COVID-19 pandemic', Annals of Intensive Care, 12(1), 9.",
    url: "https://doi.org/10.1186/s13613-022-00985-y"
  },
  {
    id: 6,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Kotfis, K., Zegan-Baranska, M., Zukowski, M., Kusza, K., Kaczmarczyk, M. and Ely, E.W. (2017) 'Multicenter assessment of sedation and delirium practices in the intensive care units in Poland - is this common practice in Eastern Europe?', BMC Anesthesiology, 17(1), 120.",
    url: "https://doi.org/10.1186/s12871-017-0415-2"
  },
  {
    id: 7,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Zun, L.S. (2018) 'Evidence-based review of pharmacotherapy for acute agitation. Part 2: safety', Journal of Emergency Medicine, 54(4), pp. 522-532.",
    url: "https://doi.org/10.1016/j.jemermed.2017.11.031"
  },
  {
    id: 8,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Ostuzzi, G. and colleagues (2026) 'Comparative effectiveness and safety of pharmacological treatments for rapid tranquilisation in emergency settings: a systematic review and individual participant data network meta-analysis', The Lancet Psychiatry.",
    url: "https://doi.org/10.1016/S2215-0366(26)00097-0"
  },
  {
    id: 9,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Agar, M.R., Lawlor, P.G., Quinn, S., Draper, B., Caplan, G.A., Rowett, D., Sanderson, C., Hardy, J., Le, B., Eckermann, S., McCaffrey, N., Devilee, L., Fazekas, B., Hill, M. and Currow, D.C. (2017) 'Efficacy of oral risperidone, haloperidol, or placebo for symptoms of delirium among patients in palliative care: a randomized clinical trial', JAMA Internal Medicine, 177(1), pp. 34-42.",
    url: "https://doi.org/10.1001/jamainternmed.2016.7491"
  },
  {
    id: 10,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Hirsch, S. and Steinert, T. (2019) 'Measures to avoid coercion in psychiatry and their efficacy: the use of rapid tranquilization in aggressive behavior', Deutsches Arzteblatt International, 116(26), pp. 445-452.",
    url: "https://doi.org/10.3238/arztebl.2019.0445"
  },
  {
    id: 11,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Pepa, P.A., Lee, K.C., Huynh, H.E. and Wilson, M.P. (2017) 'Safety of risperidone for acute agitation and alcohol intoxication in emergency department patients', Journal of Emergency Medicine, 53(4), pp. 530-535.",
    url: "https://doi.org/10.1016/j.jemermed.2017.05.028"
  },
  {
    id: 12,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Mullinax, S., Shokraneh, F., Wilson, M.P. and Adams, C.E. (2017) 'Oral medication for agitation of psychiatric origin: a scoping review of randomized controlled trials', Journal of Emergency Medicine, 53(4), pp. 524-529.",
    url: "https://doi.org/10.1016/j.jemermed.2017.04.026"
  },
  {
    id: 13,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Green, S.M., Roback, M.G., Kennedy, R.M. and Krauss, B. (2011) 'Clinical practice guideline for emergency department ketamine dissociative sedation: 2011 update', Annals of Emergency Medicine, 57(5), pp. 449-461.",
    url: "https://doi.org/10.1016/j.annemergmed.2010.11.030"
  },
  {
    id: 14,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Linder, L.M., Ross, C.A. and Weant, K.A. (2018) 'Ketamine for the acute management of excited delirium and agitation in the prehospital setting', Pharmacotherapy, 38(1), pp. 139-151.",
    url: "https://doi.org/10.1002/phar.2060"
  },
  {
    id: 15,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Lipscombe, C., Akhlaghi, H., Groombridge, C., Bernard, S., Smith, K. and Olaussen, A. (2023) 'Intubation rates following prehospital administration of ketamine for acute agitation: a systematic review and meta-analysis', Prehospital Emergency Care, 27(8), pp. 1016-1030.",
    url: "https://doi.org/10.1080/10903127.2022.2108178"
  },
  {
    id: 16,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Page, M.J., McKenzie, J.E., Bossuyt, P.M., Boutron, I., Hoffmann, T.C., Mulrow, C.D., Shamseer, L., Tetzlaff, J.M., Akl, E.A., Brennan, S.E., Chou, R., Glanville, J., Grimshaw, J.M., Hrobjartsson, A., Lalu, M.M., Li, T., Loder, E.W., Mayo-Wilson, E., McDonald, S., McGuinness, L.A., Stewart, L.A., Thomas, J., Tricco, A.C., Welch, V.A., Whiting, P. and Moher, D. (2021) 'The PRISMA 2020 statement: an updated guideline for reporting systematic reviews', BMJ, 372, n71.",
    url: "https://doi.org/10.1136/bmj.n71"
  },
  {
    id: 17,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Moher, D., Liberati, A., Tetzlaff, J. and Altman, D.G. (2009) 'Preferred reporting items for systematic reviews and meta-analyses: the PRISMA statement', BMJ, 339, b2535.",
    url: "https://doi.org/10.1136/bmj.b2535"
  },
  {
    id: 18,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Campbell, M., McKenzie, J.E., Sowden, A., Katikireddi, S.V., Brennan, S.E., Ellis, S., Hartmann-Boyce, J., Ryan, R., Shepperd, S., Thomas, J., Welch, V. and Thomson, H. (2020) 'Synthesis without meta-analysis (SWiM) in systematic reviews: reporting guideline', BMJ, 368, l6890.",
    url: "https://doi.org/10.1136/bmj.l6890"
  },
  {
    id: 19,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Sterne, J.A.C., Savovic, J., Page, M.J., Elbers, R.G., Blencowe, N.S., Boutron, I., Cates, C.J., Cheng, H.Y., Corbett, M.S., Eldridge, S.M., Emberson, J.R., Hernan, M.A., Hopewell, S., Hrobjartsson, A., Junqueira, D.R., Juni, P., Kirkham, J.J., Lasserson, T., Li, T., McAleenan, A., Reeves, B.C., Shepperd, S., Shrier, I., Stewart, L.A., Tilling, K., White, I.R., Whiting, P.F. and Higgins, J.P.T. (2019) 'RoB 2: a revised tool for assessing risk of bias in randomised trials', BMJ, 366, l4898.",
    url: "https://doi.org/10.1136/bmj.l4898"
  },
  {
    id: 20,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Sterne, J.A., Hernan, M.A., Reeves, B.C., Savovic, J., Berkman, N.D., Viswanathan, M., Henry, D., Altman, D.G., Ansari, M.T., Boutron, I., Carpenter, J.R., Chan, A.W., Churchill, R., Deeks, J.J., Hrobjartsson, A., Kirkham, J., Juni, P., Loke, Y.K., Pigott, T.D., Ramsay, C.R., Regidor, D., Rothstein, H.R., Sandhu, L., Santaguida, P.L., Schunemann, H.J., Shea, B., Shrier, I., Tugwell, P., Turner, L., Valentine, J.C., Waddington, H., Waters, E., Wells, G.A., Whiting, P.F. and Higgins, J.P. (2016) 'ROBINS-I: a tool for assessing risk of bias in non-randomised studies of interventions', BMJ, 355, i4919.",
    url: "https://doi.org/10.1136/bmj.i4919"
  },
  {
    id: 21,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Guyatt, G.H., Oxman, A.D., Vist, G.E., Kunz, R., Falck-Ytter, Y., Alonso-Coello, P. and Schunemann, H.J. (2008) 'GRADE: an emerging consensus on rating quality of evidence and strength of recommendations', BMJ, 336(7650), pp. 924-926.",
    url: "https://doi.org/10.1136/bmj.39489.470347.AD"
  },
  {
    id: 22,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Hultcrantz, M., Rind, D., Akl, E.A., Treweek, S., Mustafa, R.A., Iorio, A., Alper, B.S., Meerpohl, J.J., Murad, M.H., Ansari, M.T., Katikireddi, S.V., Ostlund, P., Tranaeus, S., Christensen, R., Gartlehner, G., Brozek, J., Izcovich, A., Schunemann, H. and Guyatt, G. (2017) 'The GRADE Working Group clarifies the construct of certainty of evidence', Journal of Clinical Epidemiology, 87, pp. 4-13.",
    url: "https://doi.org/10.1016/j.jclinepi.2017.05.006"
  },
  {
    id: 23,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Puhan, M.A., Schunemann, H.J., Murad, M.H., Li, T., Brignardello-Petersen, R., Singh, J.A., Kessels, A.G. and Guyatt, G.H. (2014) 'A GRADE Working Group approach for rating the quality of treatment effect estimates from network meta-analysis', BMJ, 349, g5630.",
    url: "https://doi.org/10.1136/bmj.g5630"
  },
  {
    id: 24,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Brignardello-Petersen, R., Bonner, A., Alexander, P.E., Siemieniuk, R.A., Furukawa, T.A., Rochwerg, B., Hazlewood, G.S., Alhazzani, W., Mustafa, R.A., Murad, M.H., Puhan, M.A., Schunemann, H.J. and Guyatt, G.H. (2018) 'Advances in the GRADE approach to rate the certainty in estimates from a network meta-analysis', Journal of Clinical Epidemiology, 93, pp. 36-44.",
    url: "https://doi.org/10.1016/j.jclinepi.2017.10.005"
  },
  {
    id: 25,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Cohen, J. (1988) Statistical power analysis for the behavioral sciences. 2nd edn. Hillsdale, NJ: Lawrence Erlbaum Associates. Available at:",
    url: "https://doi.org/10.4324/9780203771587"
  },
  {
    id: 26,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Barbic, D., Andolfatto, G., Grunau, B., Scheuermeyer, F.X., Macewan, B., Qian, H., Wong, H., Barbic, S.P. and Honer, W.G. (2021) 'Rapid agitation control with ketamine in the emergency department: a blinded, randomized controlled trial', Annals of Emergency Medicine, 78(6), pp. 788-795.",
    url: "https://doi.org/10.1016/j.annemergmed.2021.05.023"
  },
  {
    id: 27,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Aghili, M., AkhavanHejazi, H., Naderpour, Z., Vahidi, E. and Saeedi, M. (2023) 'Haloperidol-midazolam vs. haloperidol-ketamine in controlling the agitation of delirious patients; a randomized clinical trial', Archives of Academic Emergency Medicine, 11(1), e61.",
    url: "https://doi.org/10.22037/aaem.v11i1.2095"
  },
  {
    id: 28,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Kent, J., Austin, E. and Nolan, B. (2022) 'Does ketamine provide a shorter time to sedation when compared to haloperidol and midazolam in the agitated ED patient?', CJEM, 24(2), pp. 133-134.",
    url: "https://doi.org/10.1007/s43678-021-00249-x"
  },
  {
    id: 29,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Cole, J.B., Moore, J.C., Nystrom, P.C., Orozco, B.S., Stellpflug, S.J., Kornas, R.L., Fryza, B.J., Steinberg, L.W., O'Brien-Lambert, A., Bache-Wiig, P., Engebretsen, K.M. and Ho, J.D. (2016) 'A prospective study of ketamine versus haloperidol for severe prehospital agitation', Clinical Toxicology, 54(7), pp. 556-562.",
    url: "https://doi.org/10.1080/15563650.2016.1177652"
  },
  {
    id: 30,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Heydari, F., Gholamian, A., Zamani, M. and Majidinejad, S. (2018) 'Effect of intramuscular ketamine versus haloperidol on short-term control of severe agitated patients in emergency department; a randomized clinical trial', Bulletin of Emergency and Trauma, 6(4), pp. 292-299.",
    url: "https://doi.org/10.29252/beat-060404"
  },
  {
    id: 31,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Riddell, J., Tran, A., Bengiamin, R., Hendey, G.W. and Armenian, P. (2017) 'Ketamine as a first-line treatment for severely agitated emergency department patients', American Journal of Emergency Medicine, 35(7), pp. 1000-1004.",
    url: "https://doi.org/10.1016/j.ajem.2017.02.026"
  },
  {
    id: 32,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Isbister, G.K., Calver, L.A., Page, C.B., Stokes, B., Bryant, J.L. and Downes, M.A. (2010) 'Randomized controlled trial of intramuscular droperidol versus midazolam for violence and acute behavioral disturbance: the DORM study', Annals of Emergency Medicine, 56(4), pp. 392-401.e1.",
    url: "https://doi.org/10.1016/j.annemergmed.2010.05.037"
  },
  {
    id: 33,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Klein, L.R., Driver, B.E., Miner, J.R., Martel, M.L., Hessel, M., Collins, J.D., Horton, G.B., Fagerstrom, E., Satpathy, R. and Cole, J.B. (2018) 'Intramuscular midazolam, olanzapine, ziprasidone, or haloperidol for treating acute agitation in the emergency department', Annals of Emergency Medicine, 72(4), pp. 374-385.",
    url: "https://doi.org/10.1016/j.annemergmed.2018.04.027"
  },
  {
    id: 34,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Knott, J.C., Taylor, D.M. and Castle, D.J. (2006) 'Randomized clinical trial comparing intravenous midazolam and droperidol for sedation of the acutely agitated patient in the emergency department', Annals of Emergency Medicine, 47(1), pp. 61-67.",
    url: "https://doi.org/10.1016/j.annemergmed.2005.07.003"
  },
  {
    id: 35,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Chan, E.W., Taylor, D.M., Knott, J.C., Phillips, G.A., Castle, D.J. and Kong, D.C. (2013) 'Intravenous droperidol or olanzapine as an adjunct to midazolam for the acutely agitated patient: a multicenter, randomized, double-blind, placebo-controlled clinical trial', Annals of Emergency Medicine, 61(1), pp. 72-81.",
    url: "https://doi.org/10.1016/j.annemergmed.2012.07.118"
  },
  {
    id: 36,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Baldacara, L., Sanches, M., Cordeiro, D.C. and Jackowski, A.P. (2011) 'Rapid tranquilization for agitated patients in emergency psychiatric rooms: a randomized trial of olanzapine, ziprasidone, haloperidol plus promethazine, haloperidol plus midazolam and haloperidol alone', Revista Brasileira de Psiquiatria, 33(1), pp. 30-39.",
    url: "https://doi.org/10.1590/s1516-44462011000100008"
  },
  {
    id: 37,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Lin, J., Figuerado, Y., Montgomery, A., Lee, J., Cannis, M., Norton, V.C., Calvo, R. and Sikand, H. (2021) 'Efficacy of ketamine for initial control of acute agitation in the emergency department: a randomized study', American Journal of Emergency Medicine, 44, pp. 306-311.",
    url: "https://doi.org/10.1016/j.ajem.2020.04.013"
  },
  {
    id: 38,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Cole, J.B., Klein, L.R., Nystrom, P.C., Moore, J.C., Driver, B.E., Fryza, B.J., Harrington, J. and Ho, J.D. (2018) 'A prospective study of ketamine as primary therapy for prehospital profound agitation', American Journal of Emergency Medicine, 36(5), pp. 789-796.",
    url: "https://doi.org/10.1016/j.ajem.2017.10.022"
  },
  {
    id: 39,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "O'Connor, L., Rebesco, M., Robinson, C., Gross, K., Castellana, A., O'Connor, M.J. and Restuccia, M. (2019) 'Outcomes of prehospital chemical sedation with ketamine versus haloperidol and benzodiazepine or physical restraint only', Prehospital Emergency Care, 23(2), pp. 201-209.",
    url: "https://doi.org/10.1080/10903127.2018.1501445"
  },
  {
    id: 40,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Isenberg, D.L. and Jacobs, D. (2015) 'Prehospital Agitation and Sedation Trial (PhAST): a randomized control trial of intramuscular haloperidol versus intramuscular midazolam for the sedation of the agitated or violent patient in the prehospital environment', Prehospital and Disaster Medicine, 30(5), pp. 491-495.",
    url: "https://doi.org/10.1017/S1049023X15004999"
  },
  {
    id: 41,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Johndro, C., Caffyn, S., Chen, J., Bailey, D., Burak, M., Perriello, E. and Youngstrom, D. (2024) 'Prehospital use of ketamine versus midazolam for sedation in acute severe agitation', International Journal of Paramedicine, (7), pp. 23-30.",
    url: "https://doi.org/10.56068/RHLT6550"
  },
  {
    id: 42,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Ferraz Goncalves, J.A., Almeida, A., Costa, I., Silva, P. and Carneiro, R. (2016) 'Comparison of haloperidol alone and in combination with midazolam for the treatment of acute agitation in an inpatient palliative care service', Journal of Pain and Palliative Care Pharmacotherapy, 30(4), pp. 284-288.",
    url: "https://doi.org/10.1080/15360288.2016.1231733"
  },
  {
    id: 43,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Martel, M., Sterzinger, A., Miner, J., Clinton, J. and Biros, M. (2005) 'Management of acute undifferentiated agitation in the emergency department: a randomized double-blind trial of droperidol, ziprasidone, and midazolam', Academic Emergency Medicine, 12(12), pp. 1167-1172.",
    url: "https://doi.org/10.1197/j.aem.2005.07.017"
  },
  {
    id: 44,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Isbister, G.K., Calver, L.A., Downes, M.A. and Page, C.B. (2016) 'Ketamine as rescue treatment for difficult-to-sedate severe acute behavioral disturbance in the emergency department', Annals of Emergency Medicine, 67(5), pp. 581-587.",
    url: "https://doi.org/10.1016/j.annemergmed.2015.11.028"
  },
  {
    id: 45,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Mankowitz, S.L., Regenberg, P., Kaldan, J. and Cole, J.B. (2018) 'Ketamine for rapid sedation of agitated patients in the prehospital and emergency department settings: a systematic review and proportional meta-analysis', Journal of Emergency Medicine, 55(5), pp. 670-681.",
    url: "https://doi.org/10.1016/j.jemermed.2018.07.017"
  },
  {
    id: 46,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Burnett, A.M., Peterson, B.K., Stellpflug, S.J., Engebretsen, K.M., Glasrud, K.J., Marks, J. and Frascone, R.J. (2015) 'The association between ketamine given for prehospital chemical restraint with intubation and hospital admission', American Journal of Emergency Medicine, 33(1), pp. 76-79.",
    url: "https://doi.org/10.1016/j.ajem.2014.10.016"
  },
  {
    id: 47,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Burnett, A.M., Salzman, J.G., Griffith, K.R., Kroeger, B. and Frascone, R.J. (2012) 'The emergency department experience with prehospital ketamine: a case series of 13 patients', Prehospital Emergency Care, 16(4), pp. 553-559.",
    url: "https://doi.org/10.3109/10903127.2012.695434"
  },
  {
    id: 48,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Le Cong, M. and Humble, I. (2015) 'A ketamine protocol and intubation rates for psychiatric air medical retrieval', Air Medical Journal, 34(6), pp. 357-359.",
    url: "https://doi.org/10.1016/j.amj.2015.07.007"
  },
  {
    id: 49,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "O'Brien, M.E., Fuh, L., Raja, A.S., White, B.A., Yun, B.J. and Hayes, B.D. (2020) 'Reduced-dose intramuscular ketamine for severe agitation in an academic emergency department', Clinical Toxicology, 58(4), pp. 294-298.",
    url: "https://doi.org/10.1080/15563650.2019.1643468"
  },
  {
    id: 50,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Olives, T.D., Nystrom, P.C., Cole, J.B., Dodd, K.W. and Ho, J.D. (2016) 'Intubation of profoundly agitated patients treated with prehospital ketamine', Prehospital and Disaster Medicine, 31(6), pp. 593-602.",
    url: "https://doi.org/10.1017/S1049023X16000819"
  },
  {
    id: 51,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Friedman, M.S., Saloum, D., Haaland, A., Drapkin, J., Likourezos, A. and Strayer, R.J. (2021) 'Description of adverse events in a cohort of dance festival attendees with stimulant-induced severe agitation treated with dissociative-dose ketamine', Prehospital Emergency Care, 25(6), pp. 761-767.",
    url: "https://doi.org/10.1080/10903127.2020.1837311"
  },
  {
    id: 52,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Nguyen, T. and colleagues (2020) 'Ketamine use in the emergency department for pain and agitation/delirium: a health system experience', Western Journal of Emergency Medicine, 21(2), pp. 272-281.",
    url: "https://doi.org/10.5811/westjem.2019.10.43067"
  },
  {
    id: 53,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Brown, C.A. 3rd, Bair, A.E., Pallin, D.J. and Walls, R.M. (2015) 'Techniques, success, and adverse events of emergency department adult intubations', Annals of Emergency Medicine, 65(4), pp. 363-370.e1.",
    url: "https://doi.org/10.1016/j.annemergmed.2014.10.036"
  },
  {
    id: 54,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Hu, Q., Liu, X., Wen, C., Li, D. and Lei, X. (2024) 'The impact of ketamine on emergency rapid sequence intubation: a systematic review and meta-analysis', BMC Emergency Medicine, 24(1), 183.",
    url: "https://doi.org/10.1186/s12873-024-01094-8"
  },
  {
    id: 55,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Breindahl, N., Baekgaard, J., Christensen, R.E., Jensen, A.H., Creutzburg, A., Steinmetz, J. and Rasmussen, L.S. (2021) 'Ketamine versus propofol for rapid sequence induction in trauma patients: a retrospective study', Scandinavian Journal of Trauma, Resuscitation and Emergency Medicine, 29(1), 136.",
    url: "https://doi.org/10.1186/s13049-021-00948-5"
  },
  {
    id: 56,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Cole, J.B., Lee, S.C., Martel, M.L., Smith, S.W., Biros, M.H. and Miner, J.R. (2020) 'The incidence of QT prolongation and torsades des pointes in patients receiving droperidol in an urban emergency department', Western Journal of Emergency Medicine, 21(4), pp. 728-736.",
    url: "https://doi.org/10.5811/westjem.2020.4.47036"
  },
  {
    id: 57,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Shale, J.H., Shale, C.M. and Mastin, W.D. (2003) 'A review of the safety and efficacy of droperidol for the rapid sedation of severely agitated and violent patients', Journal of Clinical Psychiatry, 64(5), pp. 500-505.",
    url: "https://doi.org/10.4088/jcp.v64n0502"
  },
  {
    id: 58,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Alqahtani, F., Alshahrani, M. and colleagues (2024) 'Evaluation of droperidol use in the emergency department: a retrospective analysis of QTc prolongation and adverse events', BMC Emergency Medicine, 24(1), 245.",
    url: "https://doi.org/10.1186/s12873-024-01158-9"
  },
  {
    id: 59,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Li, M., Martinelli, A.N., Oliver, W.D. and Wilkerson, R.G. (2020) 'Evaluation of ketamine for excited delirium syndrome in the adult emergency department', Journal of Emergency Medicine, 58(1), pp. 100-105.",
    url: "https://doi.org/10.1016/j.jemermed.2019.09.019"
  },
  {
    id: 60,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Godwin, S.A., Burton, J.H., Gerardo, C.J., Hatten, B.W., Mace, S.E., Silvers, S.M. and Fesmire, F.M. (2014) 'Clinical policy: procedural sedation and analgesia in the emergency department', Annals of Emergency Medicine, 63(2), pp. 247-258.e18.",
    url: "https://doi.org/10.1016/j.annemergmed.2013.10.015"
  },
  {
    id: 61,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Chan, E.W., Lao, K.S.J., Lam, L., Tsui, S.H., Lui, C.T., Wong, C.P., Graham, C.A., Cheng, C.H., Chung, T.S., Lam, H.F., Ting, S.M., Knott, J.C., Taylor, D.M., Kong, D.C.M., Leung, L.P. and Wong, I.C.K. (2021) 'Intramuscular midazolam, olanzapine, or haloperidol for the management of acute agitation: a multi-centre, double-blind, randomised clinical trial', EClinicalMedicine, 32, 100751.",
    url: "https://doi.org/10.1016/j.eclinm.2021.100751"
  },
  {
    id: 62,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Brown, A.C., Evans, D.D. and Tucker, P. (2023) 'Is ketamine an effective treatment of acute agitation in the emergency department? Implications for APRN practice', Advanced Emergency Nursing Journal, 45(4), pp. 253-259.",
    url: "https://doi.org/10.1097/TME.0000000000000479"
  },
  {
    id: 63,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "deSouza, I.S., Thode, H.C. Jr, Shrestha, P., Allen, R., Koos, J. and Singer, A.J. (2022) 'Rapid tranquilization of the agitated patient in the emergency department: a systematic review and network meta-analysis', American Journal of Emergency Medicine, 51, pp. 363-373.",
    url: "https://doi.org/10.1016/j.ajem.2021.11.011"
  },
  {
    id: 64,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Taylor, D.M., Yap, C.Y.L., Knott, J.C., Taylor, S.E., Phillips, G.A., Karro, J., Chan, E.W., Kong, D.C.M. and Castle, D.J. (2017) 'Midazolam-droperidol, droperidol, or olanzapine for acute agitation: a randomized clinical trial', Annals of Emergency Medicine, 69(3), pp. 318-326.e1.",
    url: "https://doi.org/10.1016/j.annemergmed.2016.07.033"
  },
  {
    id: 65,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Martel, M.L., Driver, B.E., Miner, J.R., Biros, M.H. and Cole, J.B. (2021) 'Randomized double-blind trial of intramuscular droperidol, ziprasidone, and lorazepam for acute undifferentiated agitation in the emergency department', Academic Emergency Medicine, 28(4), pp. 421-434.",
    url: "https://doi.org/10.1111/acem.14124"
  },
  {
    id: 66,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Conrardy, M., Golden, A., Nelson, L.S., Chang, B.P. and Weinstock, M. (2022) 'Midazolam with haloperidol versus lorazepam with haloperidol for agitation: effect on emergency department lengths of stay', Academic Emergency Medicine, 29(3), pp. 356-358.",
    url: "https://doi.org/10.1111/acem.14418"
  },
  {
    id: 67,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Huf, G., Alexander, J., Gandhi, P. and Allen, M.H. (2016) 'Haloperidol plus promethazine for psychosis-induced aggression', Cochrane Database of Systematic Reviews, 11(11), CD005146.",
    url: "https://doi.org/10.1002/14651858.CD005146.pub3"
  },
  {
    id: 68,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Casey, M.F., Elder, N.M., Fenn, A., Niznik, J., Khoujah, D., Cole, J.B., Cardon, Z., Ding, M., Goukasian, N., Moreton, E., Koehl, J.L., Magidson, P.D., Skains, R.M., Tyler, K. and Liu, S.W. (2025) 'Comparative safety of medications for severe agitation: a Geriatric Emergency Department Guidelines 2.0 systematic review', Journal of the American Geriatrics Society, 73(9), pp. 2893-2904.",
    url: "https://doi.org/10.1111/jgs.19485"
  },
  {
    id: 69,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Kalyoncu, A., Mormando, C. and Francis, A. (2026) 'Benzodiazepine prescribing in delirium diagnosis: national data on clinical practice', Journal of the Academy of Consultation-Liaison Psychiatry.",
    url: "https://doi.org/10.1016/j.jaclp.2026.08.005"
  },
  {
    id: 70,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "White, N.C., Cowart, C.R. and Cios, T.J. (2024) 'Pharmacological prevention of postoperative delirium in adults: a review of recent literature', Current Neurology and Neuroscience Reports, 24(12), pp. 681-689.",
    url: "https://doi.org/10.1007/s11910-024-01385-4"
  },
  {
    id: 71,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Leigh, V., Stern, C., Elliott, R. and Tufanaru, C. (2019) 'Effectiveness and harms of pharmacological interventions for the treatment of delirium in adults in intensive care units after cardiac surgery: a systematic review', JBI Database of Systematic Reviews and Implementation Reports, 17(10), pp. 2020-2074.",
    url: "https://doi.org/10.11124/JBISRIR-D-18-00010"
  },
  {
    id: 72,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Lachs, J., Barghout, R., Haussner, W., Hancock, D., Benton, E., Dorsett, M., Peters, G., Cash, R., Holley, J. and Rosen, T. (2026) 'Exploring current emergency medical services approaches to manage agitated older adult patients: an analysis of statewide protocols', Journal of the American Geriatrics Society, 74(7), pp. 1919-1927.",
    url: "https://doi.org/10.1111/jgs.70466"
  },
  {
    id: 73,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Flukiger, J., Hollinger, A., Speich, B., Meier, V., Tontsch, J., Zehnder, T. and Siegemund, M. (2018) 'Dexmedetomidine in prevention and treatment of postoperative and intensive care unit delirium: a systematic review and meta-analysis', Annals of Intensive Care, 8(1), 92.",
    url: "https://doi.org/10.1186/s13613-018-0437-z"
  },
  {
    id: 74,
    kind: "As cited in the manuscript; not independently re-verified.",
    text: "Bourke, E.M., Borland, M.L., Kochar, A., George, S., Shellshear, D., Jani, S., Perkins, K., Tham, D., Gordon, M.S., Klein, K., Prakash, C., Lee, K., Davidson, A., Knott, J.C., Craig, S. and Babl, F.E. (2023) 'Pharmacological emergency management of agitation in children and young people: protocol for a randomised controlled trial of oral medication (PEAChY-O)', BMJ Open, 13(3), e067433.",
    url: "https://doi.org/10.1136/bmjopen-2022-067433"
  },
];

const NODES = [
  {
    "id": "start",
    "type": "terminal",
    "label": "Adult with hyperactive delirium with severe agitation",
    "sub": "(e.g., RASS ≥ +3 or AMSS ≥ +2; danger to self or others)",
    "meaning": "Entry point for the algorithm: an adult meeting a validated threshold for severe agitation attributable to hyperactive delirium (classically termed excited delirium syndrome), posing danger to self or others.",
    "rationale": "Time to adequate sedation is a plausible surrogate for physiological rescue, not a convenience endpoint — continued physical struggle against restraint drives lactic acidosis, hyperthermia, rhabdomyolysis and hyperkalaemia, and cardiac arrest in this population characteristically occurs against a background of severe acidaemia. Neither the ICD nor the DSM recognises excited delirium as a formal diagnosis, and the label has been criticised as a post hoc justification for restraint-related deaths; the 2021 ACEP task force's descriptor “hyperactive delirium with severe agitation” (ACEP formally withdrew its 2009 white paper in 2023) reorients clinicians toward identifying and treating reversible underlying causes rather than treating sedation as an end in itself.",
    "refs": [
      1,
      2,
      3,
      26,
      27
    ]
  },
  {
    "id": "immediate_measures",
    "type": "process",
    "label": "Immediate measures (in parallel)",
    "sub": "Team approach; verbal de-escalation if feasible; minimise restraint time, never prone\nPoint-of-care glucose; SpO2, capnography (ETCO2) and temperature as soon as safe\nSuction, bag-valve-mask and airway equipment at the bedside before sedation",
    "meaning": "Parallel, non-pharmacological and monitoring steps performed alongside — not instead of — pharmacological sedation.",
    "rationale": "None of this algorithm's 12 included comparative studies tested verbal de-escalation, prone-restraint avoidance, point-of-care glucose, or a pre-sedation airway checklist as a study intervention — these steps are adopted from external guidance (the 2024 ACEP clinical policy among others) rather than from the review's own charted trial data.",
    "refs": [
      1,
      2,
      3,
      4,
      13,
      60
    ]
  },
  {
    "id": "haloperidol_backbone",
    "type": "process",
    "tone": "key",
    "label": "Haloperidol backbone at the lowest effective dose",
    "sub": "(2.5–5 mg IV/IM in the included trials; obtain ECG/QTc when feasible)",
    "meaning": "Haloperidol — a butyrophenone dopamine D2 receptor antagonist and the default parenteral antipsychotic in many health systems for four decades — is the backbone every adjunct in this algorithm is added to.",
    "rationale": "Haloperidol monotherapy is comparatively slow in onset and frequently fails to achieve adequate sedation within clinically relevant windows: an individual-participant-data network meta-analysis of rapid tranquillisation found haloperidol monotherapy among the least effective options and associated with extrapyramidal side-effects, and in a placebo-controlled palliative-care RCT, haloperidol produced higher delirium symptom scores than placebo — so here it is used as agitation-directed therapy to control dangerous behaviour, not as delirium-directed therapy. Because monotherapy is frequently insufficient, combination regimens dominate real-world practice.",
    "dose": [
      [
        "Dose in included combination trials",
        "2.5–5 mg IV/IM"
      ],
      [
        "Monitoring",
        "ECG/QTc when feasible"
      ]
    ],
    "cautions": [
      "This 2.5–5 mg range is the dose used in the midazolam/ketamine combination trials specifically — several of the review's other included studies used haloperidol comparator arms at 10 mg, or did not state the milligram dose used at all."
    ],
    "refs": [
      4,
      7,
      8,
      9,
      10,
      11,
      12,
      26,
      27,
      30,
      33
    ]
  },
  {
    "id": "withdrawal_decision",
    "type": "decision",
    "label": "Suspected sedative-hypnotic or ethanol withdrawal?",
    "meaning": "First branch point: is the agitation attributable to sedative-hypnotic or ethanol withdrawal, rather than to primary psychiatric illness, delirium of another cause, or sympathomimetic toxicity?",
    "rationale": "The adjunct choice for withdrawal states is driven by pharmacological mechanism, not by the comparative speed/safety trial data that drives the rest of this algorithm.",
    "refs": [
      4
    ]
  },
  {
    "id": "halo_midazolam_withdrawal",
    "type": "branch",
    "label": "Haloperidol + MIDAZOLAM",
    "sub": "Benzodiazepine is mechanistically indicated in withdrawal states",
    "meaning": "In suspected sedative-hypnotic or ethanol withdrawal, midazolam is selected irrespective of the comparative sedation-speed data favouring ketamine elsewhere in this algorithm.",
    "rationale": "Midazolam, a short-acting benzodiazepine that potentiates GABA-A-mediated inhibition, directly treats the pharmacology of withdrawal — a benzodiazepine is mechanistically indicated here regardless of which adjunct sedates faster in the general population, because ketamine (an NMDA-receptor antagonist) does not address the withdrawal mechanism itself.",
    "refs": [
      4
    ]
  },
  {
    "id": "older_adult_decision",
    "type": "decision",
    "label": "Older adult (≥ 65 years)?",
    "meaning": "Second branch point, for patients not in withdrawal: is the patient 65 years of age or older?",
    "rationale": "This threshold is not derived from the review's own included studies — participant ages across all 12 studies ranged from a mean/median of 29 to 53 years, with only one trial (mean age 52.8 ± 19.4 years) averaging over 50. The cutoff, and the guidance that follows it, is adopted from external geriatric-emergency-medicine and ACEP guidance rather than from stratified data within this review's own trials.",
    "refs": [
      3,
      27,
      68
    ]
  },
  {
    "id": "avoid_benzos_older",
    "type": "branch",
    "label": "Avoid benzodiazepines where possible",
    "sub": "(precipitate/prolong delirium)\nReduce doses of all agents; ketamine data sparse — choose by airway resources",
    "meaning": "In older adults, benzodiazepines are avoided where possible, doses of all agents are reduced, and the choice between remaining agents is guided by available airway resources rather than by the general-population speed/safety comparison.",
    "rationale": "A Geriatric Emergency Department Guidelines 2.0 systematic review found adverse events were most common among older patients receiving benzodiazepines, and benzodiazepines are independently associated with precipitating and prolonging delirium in this age group. Comparative evidence for ketamine specifically in older adults remains sparse, so the clinical rule here is: the argument against midazolam is stronger than the evidence base for ketamine as a confirmed alternative — hence dose reduction of all agents and airway-resource-guided selection, not a blanket switch to ketamine.",
    "cautions": [
      "Comparative trial data for either adjunct in patients ≥ 65 years is sparse — this branch reflects geriatric-delirium and medication-safety guidance, not head-to-head trial evidence in this specific age group."
    ],
    "refs": [
      3,
      68,
      69,
      70,
      71,
      72
    ]
  },
  {
    "id": "halo_midazolam_noairway",
    "type": "branch",
    "label": "Haloperidol + MIDAZOLAM",
    "sub": "(0.05 mg/kg IV or 5 mg IM in trials)\nWatch: hypoventilation, SpO2 fall at 5–10 min; worse with ethanol/opioids",
    "meaning": "Where immediate airway rescue is not available, midazolam is the adjunct of choice.",
    "rationale": "Benzodiazepine-induced respiratory depression is gradual in onset and dose-dependent, and in the great majority of cases is reversible and manageable with positioning, supplemental oxygen and bag-valve-mask support — unlike laryngospasm, ketamine's main airway risk, which has the shortest interval to catastrophe of any adverse event in this algorithm and specifically requires immediate rescue capability.",
    "dose": [
      [
        "Trial dosing",
        "0.05 mg/kg IV or 5 mg IM"
      ]
    ],
    "cautions": [
      "Watch for hypoventilation and a SpO2 fall at 5–10 minutes; this effect is worse with co-ingested ethanol or opioids."
    ],
    "refs": [
      13,
      26,
      27
    ]
  },
  {
    "id": "airway_decision",
    "type": "decision",
    "label": "Capnography, airway expertise and immediate airway rescue available?",
    "meaning": "Third branch point, for patients not in withdrawal and under 65: are capnography, airway expertise, and immediate airway rescue capability available at the bedside?",
    "rationale": "This question gates the ketamine option specifically. Ketamine's main advantage — relative preservation of respiratory drive — only translates into a net safety benefit if its principal airway risk, laryngospasm, can be rescued immediately; the algorithm defaults to midazolam wherever that capability isn't confirmed (e.g. a resource-limited prehospital service, remote facility, or isolated ward).",
    "refs": [
      13,
      60
    ]
  },
  {
    "id": "halo_ketamine",
    "type": "branch",
    "label": "Haloperidol + KETAMINE",
    "sub": "Faster control, less restraint (LOW certainty); favoured in sympathomimetic toxicity. 0.5 mg/kg IV in the direct RCT\nWatch: hypersalivation, laryngospasm, emergence reactions",
    "meaning": "Where immediate airway rescue is available, ketamine is the adjunct of choice — a non-competitive NMDA-receptor antagonist producing dissociative sedation with relative preservation of airway reflexes and respiratory drive, acting within minutes even by the IM route.",
    "rationale": "In the one direct RCT (haloperidol 2.5 mg IV + ketamine 0.5 mg/kg IV vs haloperidol 2.5 mg IV + midazolam 0.05 mg/kg IV, n = 140, Aghili 2023), the ketamine arm showed significantly greater agitation-score reduction at 5, 10 and 15 minutes, a significantly shorter time to maximum effect, and significantly less need for physical restraint (p = 0.001). In the near-direct RCT (ketamine 5 mg/kg IM vs midazolam 5 mg + haloperidol 5 mg IM, n = 80, Barbic 2021), median time to adequate sedation was 5.8 vs 14.7 minutes (HR 2.43, 95% CI 1.43–4.12) — but converted to a standardised effect size this is d ≈ 0.49, sitting right at the boundary of this review's own prespecified MCID (d ≥ 0.50) rather than convincingly beyond it. Ketamine is specifically favoured where sympathomimetic toxicity is suspected, given its faster onset and lower respiratory-depressant burden.",
    "dose": [
      [
        "Direct RCT dosing",
        "0.5 mg/kg IV"
      ]
    ],
    "cautions": [
      "Watch for hypersalivation, laryngospasm, and emergence reactions.",
      "A pooled meta-analysis of 18 prehospital studies (3,476 patients) found a 16% (95% CI 8–26%) intubation rate after prehospital ketamine for acute agitation — but that evidence comes from ketamine monotherapy at 4–5 mg/kg IM, five to ten times this algorithm's low-dose IV combination regimen, so its applicability here is uncertain and probably overstated.",
      "Certainty of evidence for every outcome in this comparison is LOW at best (efficacy) and VERY LOW for every safety outcome — no outcome in the underlying review reached moderate or high certainty."
    ],
    "refs": [
      13,
      14,
      15,
      26,
      27,
      38,
      51,
      60
    ]
  },
  {
    "id": "reassess",
    "type": "process",
    "label": "Reassess at 5, 10, 15 and 30 min: RASS/AMSS, SpO2, ETCO2, HR, BP, temperature",
    "meaning": "Convergence point after any adjunct is given: structured reassessment on a fixed schedule, with a fixed parameter set, regardless of which branch was taken.",
    "rationale": "Every pathway through this algorithm reconvenes here before the next decision (adequate sedation vs. rescue) is made.",
    "dose": [
      [
        "Reassessment schedule",
        "5, 10, 15 and 30 min"
      ],
      [
        "Parameters",
        "RASS/AMSS, SpO2, ETCO2, HR, BP, temperature"
      ]
    ],
    "refs": [
      27
    ]
  },
  {
    "id": "adequate_sedation_decision",
    "type": "decision",
    "label": "Adequate sedation?",
    "meaning": "Is the patient now adequately sedated, by whichever validated instrument and threshold the treating team is using?",
    "rationale": "Definitions of “adequate sedation” varied across the review's 12 included studies — from RASS ≤ −1 to AMSS < +1 — reflecting genuine heterogeneity in how different trials operationalised this endpoint, not a single universal cutoff.",
    "refs": [
      27
    ]
  },
  {
    "id": "rescue",
    "type": "terminal",
    "tone": "note",
    "label": "Rescue",
    "sub": "Repeat adjunct; ketamine is effective for refractory agitation (airway ready)",
    "meaning": "If sedation remains inadequate, repeat the chosen adjunct rather than switching agents outright, then return to the reassessment cycle (5, 10, 15 and 30 minutes) — shown here as a dead end only because this diagram doesn't draw backward loops; in the authors' own figure this box loops back up to Reassess.",
    "rationale": "In a dedicated ED observational study, ketamine specifically evaluated as rescue therapy for patients who failed to sedate adequately with conventional agents achieved control in the great majority of refractory cases — supporting a clinical niche for ketamine as a second-line rescue agent even where it wasn't the first-line choice, provided the airway is confirmed ready.",
    "cautions": [
      "Only use ketamine for rescue where the airway is confirmed ready, as at the original decision point."
    ],
    "refs": [
      38,
      44
    ]
  },
  {
    "id": "post_sedation_care",
    "type": "process",
    "label": "Post-sedation care — sedation is the means, not the endpoint",
    "sub": "Release restraints; continuous SpO2/ETCO2 and haemodynamic monitoring\nSeek and treat the cause: hypoglycaemia, sepsis, intracranial lesion, sympathomimetic toxicity, withdrawal\nActive cooling, IV fluids; check blood gas/lactate, potassium and creatine kinase",
    "meaning": "Sedation is the means to safe evaluation and treatment, not the endpoint of care — this closing box bundles the monitoring and diagnostic steps that follow adequate sedation.",
    "rationale": "Prolonged agitation and physical restraint delay essential diagnostic evaluation for reversible underlying causes, and the same physiological derangements that made rapid sedation urgent — lactic acidosis, hyperthermia, rhabdomyolysis, hyperkalaemia — are exactly what this closing step screens for and treats.",
    "cautions": [
      "Certainty of evidence across this entire algorithm is LOW at best for efficacy outcomes and VERY LOW for every safety outcome.",
      "Where droperidol is available, droperidol + midazolam has the strongest supporting evidence of any regimen in the wider literature — this algorithm addresses the haloperidol-adjunct choice specifically, for settings where droperidol is not available.",
      "Doses throughout this algorithm are those used in the included trials — follow your own institution's local protocol."
    ],
    "refs": [
      1,
      3,
      4,
      21,
      22,
      32,
      35,
      63,
      64
    ]
  }
];

const GLOSSARY = [
  {
    "match": "RASS",
    "full": "Richmond Agitation–Sedation Scale",
    "def": "A validated 10-point scale (−5 to +4) used in several of this review's included trials to grade agitation severity and define “adequate sedation” as a target score (e.g. RASS ≤ −1)."
  },
  {
    "match": "AMSS",
    "full": "Altered Mental Status Scale",
    "def": "A validated agitation-scoring instrument used in several included trials (e.g. an entry threshold of AMSS ≥ +2) as an alternative to RASS for grading agitation severity."
  },
  {
    "match": "ETCO2",
    "full": "end-tidal carbon dioxide",
    "def": "The capnography reading used alongside SpO2 to monitor ventilation during and after sedation — recommended at the bedside before any sedative is given, and specifically what gates the ketamine option at the airway-resources decision point."
  },
  {
    "match": "MCID",
    "full": "minimal clinically important difference",
    "def": "The smallest effect size judged clinically meaningful. This review set its MCID at Cohen's d ≥ 0.50, converting a hazard ratio to an approximate standardised mean difference where needed — the near-direct ketamine-vs-midazolam trial's effect (d ≈ 0.49) sits right at this boundary."
  },
  {
    "match": "GRADE",
    "full": "Grading of Recommendations Assessment, Development and Evaluation",
    "def": "The framework used to rate the certainty of evidence for each outcome in this review, from very low to high, based on risk of bias, inconsistency, indirectness, imprecision and publication bias. No outcome in this review reached moderate or high certainty."
  },
  {
    "match": "NMDA",
    "full": "N-methyl-D-aspartate receptor",
    "def": "The receptor ketamine non-competitively blocks, producing dissociative sedation while relatively preserving airway reflexes and respiratory drive."
  },
  {
    "match": "GABA-A",
    "full": "gamma-aminobutyric acid type A receptor",
    "def": "The inhibitory receptor midazolam potentiates, producing anxiolysis, amnesia and sedation — also the mechanism that makes a benzodiazepine mechanistically indicated in sedative-hypnotic and ethanol withdrawal."
  },
  {
    "match": "RoB 2",
    "full": "Cochrane Risk of Bias 2 tool",
    "def": "The instrument used to assess risk of bias across five domains in each of this review's eight included randomised controlled trials, summarised in this review's Table 3."
  }
];

const AGENTS = [
  "Haloperidol",
  "Midazolam",
  "Ketamine",
  "Droperidol",
  "Olanzapine",
  "Ziprasidone",
  "Lorazepam",
  "Promethazine",
  "Dexmedetomidine"
];
