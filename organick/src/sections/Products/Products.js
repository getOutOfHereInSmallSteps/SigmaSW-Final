import React from 'react';

import Heading from '../../components/Typography/Heading';
import Subheading from '../../components/Typography/Subheading';
import Container from '../../components/UI/Container';
import ProductBackdrop from '../../components/UI/ProductBackdrop';
import ProductForm from '../../components/UI/ProductForm';
import Product from './Product';

import styles from './Products.module.scss';

import { useState } from 'react';

const DUMMY_DB = [
  {
    id: 'p1',
    type: 'vegetable',
    name: 'Calabrese Broccoli',
    price: '20',
    discount: '7',
    description: 'abcd',
    additionalInfo: 'abcde',
    overview: 'abcdef',
    link: 'https://lh3.googleusercontent.com/-W1RWp_lfFqbywVLM9nc2s_XHSZ2PyW1J64qQEDAXyhxAe0lb3_fGv4R2-9vRTltb052XMvqbM3hSDYAUlMRyncG1Rkw2siJxFoEDk88HP4VdzW8I2ns-_BjwWsuoe10Kq5nC2kISVSNrbU4Gnw6UT__pcU396JsoGEqnjH0-kt9EtisonUvzwJwv_7fdeR5TUfEcnvRUNiNxU3vLDA6rTJBErpIW8e85uC1RbXm6pKQg3enrwtjUq0YvD_M2VhAlq9fs9O1nxj3houmCZ1hpHC4b4DzSp3QRT8rKbgK0ZFL3oFQpq0SP428B28n-oRs14kOG3JrSVwBOzylstvR1opmjW82fTQ5RktOi-ruUAGFyNePMhyL6n-zMeSbliX8G7Y8sAk2qXARXDTUqTONZg5s8Ad_cEnPMIme55HxFmpAFGHmqdipNGfsZPfMra9JgC3gZO-KbpbGXX9LpirDOh1Pg3VDsDgQQyhI0T3St2mUjQkdEWH7yKq0gbaoFqaLi_gzP2eswUW6f15pA5Vsr-lDREqm_nwSgbzm-ynw2QiN-YW700ZZBaIoracyUzIANpeXx0drXUsden9CXli8BEroSCOtzqhkELT6MXBJaZSiKoKTuH8Ng0-ma2tWb2T6EiSZ9Z94DprzAMaLrGEjAgfuWef0nfXhcxAOFlk28bJmJa3O-NGPFz4j9tgG9P2g_xnUeW_0kk0qwtOAIrdSdzpoTZJs2N-oTMNXmVworoJjESpcRLCMnr040K5P7IUPrbsIvFnf5dIzZX_KBvQli2_yrZslI7uEJwCIgePzXs9AyQJSrZEGIdVsMTCCS5hngtQweV2QvrGFOAIz5Sd1NWcCi39HcnUwfkafJuGP7JDOJKK9amUNCJkT3X43KI5UAxXUYwns2tUb0vG2Vo0cdjZbabmI5O5nGm8vkL_cHk7QriklJmE-mVi-ZRQm44oaZJ2nQ63ohWcYr-xeH12zJwl6_NCiYEr7c00QKtW4sAqhpLAZfROa3Sjxz1WmRyiNtcXkR2jSbn8_2Baw5t0qMQglsg=w335-h324-s-no?authuser=0',
  },
  {
    id: 'p2',
    type: 'fresh',
    name: 'Fresh Banana Fruites',
    price: '20',
    discount: '6',
    description: 'abcd',
    additionalInfo: 'abcde',
    overview: 'abcdef',
    link: 'https://lh3.googleusercontent.com/_nO8mGHNcQip_kLbswKKh6OwKed24X9H2yH-DlZQsSzJ_7tk5DFUK2CDy3XIOlFh-vBvSGzwuPf3RW4xCK3pro7c_oK5uMlTOz9qg0QHYubqX4-Z6D7PlqAXXZlrDkhchEyipy6bAbgnMSG1PPpp1zy9WP-yTt-we1Hs8xklkTqSXmyMT0tvrHZrnwYe-8vMf9KGS3Q1WZeUJkzogJdyOlKRtt3wPwKHsZrXtDIKNo8GNj0kWEpWFXxKzof-cKjvbuXaf8-GhtQ4GqcJPpo8LLmdM5we40aBXdaoKR8GnS3gV6cE6OfseUHZb5S6FTmKRiCrj69arXIQZu7bfNiabyd04zjfztsf_N78SRnPVhWtIoWJsHltUj6wLTi5BhC8lFWAvSxyERm9CaNy9vxLVME2WOUgx6BCwDZN9VdgZKf2x1kY0toLOXUOhDGscXUnuWfinuCZz_H3BqwA52iC92kxzScy6pmzdP0BuIMBenLoJdoQ9Exrf7ZEKbyzbiJMl6ezb0rkDmorYi3q5bYhUo96xRH_eQYpaLtlqNXvPRL4FKTo2IcJ4hG_TIfiUDl7z1aGSCCWidh949iInUr1buYlasKd-R9EQbPK6IyIBZjN9T8zf6D-G9dyWFIIK4uIYW-w2T3-2LeA5oKayDHkMRdFknmMf934lFdzEZmpGUU7Pd_uVigCOcnpYYacvDWYVBwxYTO3qFwOwp883gk5QXgmbdB8tYVXHJCjWPvXJAoOu2paaSZXvD8b19ULtBCJmHCECbmn9Tgsfp8vwPe9zMjHXDS58og_VsQZfNSTDrOOl40WhL92Mzyr9I8uQcRiV3VfIa4BNbvBMq0LqU07vwbot2VIFwHWGIJCTQ1OOj6XRwvx5rHaCoQu0omol-4HDMTCmxH090QZ_LEjYMzHp-Ex3QrHUqCRqM7AfBpf_7QUIrt9vPFZSwHh9D5315FjVwrmG09iB55dN3qgDkqizVZ87U3rH7eFfZiXpbgyIv80FQ9qfHC5X1KTzRJ1xZG6N-AEvxpt6vypG3QxZV63EQRxyQ=w336-h375-s-no?authuser=0',
  },
  {
    type: 'millets',
    name: 'White Nuts',
    price: '20',
    discount: '5',
    id: 'p3',
    description: 'abcd',
    additionalInfo: 'abcde',
    overview: 'abcdef',
    link: 'https://lh3.googleusercontent.com/YkxCu5JYvF9NnEkRqedCt4q-RActNUtUztGTw09HZqcpGAzeHfNkYYjdsZO-cSTpODxFyyiNJa4aCasRSL9ARFTF6DwK5sIHe63Lvq3ojN3qD7spxhNhnrkkzOo3mv6NolpFFLAjDxkYzB1R9nfR1XoSyPYTXFFLLmOMiPXc6DrGJIG5OeVAh2rk_k9gHMqniZuX3NR_B2RA2WoRZL4TYaM0A-u07r0uAv4FqygeAhhp6aObaNMpjpV5J5qN0d9qPm8jEpRwGlVQsEzaoSc-ie61z-0CsAXN1qtK_1GC5DvvQM_dVca09AGZGuIHeurwr6_NQ-e9QHRm3QRLRf65rwHrHjUcmcsYDHXOpHaXvqkNuY6pIC0ArGgZj79G10wJuE22qzaxE1adLjChLqEv-UcqLNNwTwQUGtd9c88CD_c-vSlP7CA14m9pgJavigc66ZHiOrj1_aplbwZ0fLewrPwhxtUbvdHGQzskq0sg5KRvuZQCjCBz7QwiwsAPaHZtc5PWcNmSk12mXZLLGdSTqjaz_GMlBqWy2Mncm4GawwvgOWS0SuTpW9tAju8931C6pZaL0PDiv0FCdadjFA9WUU-HmvEHR0PL1CKtssswE22hWniLO6jCoXdfVjq3WXnuZ6LDBRoCEpIYZ2sQabemltSfdiIepVVj-DBtlqa8JZWO4_HhnJbkVmMZsUaW-Kh6j6xrwYyfB840VGLY7jXGMoiUPjV_JNtLY77rHkXjRzYAz25Xe-MHc5b35xDtzQBfsHO60dwidkd9BtBiMXB4ORwB0kZJMWhZPSYUUPBVf2eexA99RCxoSq3WkJHJF39uieY65qmqBdbwwGEFKjJjLaJ0d8dN4YePwcOxaI0uN2N_7yzEp31_dH07lPTmZPIUnvhj-L24vQW3_0ZSFWEqjexmJv7-nJRiKh5crwieG7oedtXpYl_fEXdiekNmwAWNEKvicXE7tp4ZFRhXzTiVq_8ueB98y7175AFMJK_XufxPmu42PRFqT0kWCTaf0Dn39SMuXQmZO6njDlLBZ_tWtjb06Q=w328-h328-s-no?authuser=0',
  },
  {
    type: 'vegetables',
    name: 'Vegan Red Tomato',
    price: '20',
    discount: '3',
    id: 'p4',
    description: 'abcd',
    additionalInfo: 'abcde',
    overview: 'abcdef',
    link: 'https://lh3.googleusercontent.com/9Ws-wXU0cOpYBJquN_B0OlFDutkHRO2IomTdanNsbWA-U5s_rtLLGpoPf2HxbVPptj-2VeB1SOaaiT7URYDvgFpUMhsi5HXPw2-Mi4K--pBPdQmnfbwdYeT2OqGLKgsS907cf0ly7tpH_eiMnIEYrVENMQ9jivvISKPXokcOtMZC_ZeM8R-02BHMYSVwALgy63Oi7MTZFaI6vb0vnVt7m9MAbMBWaSTEbbGsRh_DTsmehaJc_rNkSifeaz5DkKBDrZ3CvJg36WL3GDZPuw-CV4G42tLqlD1MujZ8id3DX0my5TksV1S1NYB-vpmIelNIo4xDYFTDvR2OuNEzs9lkpaOyEdCzaSNpa5lb5-KHjLFr4aGFN6RQQRZYItSh1FUi5OKwrDd1gPmmKwsZn9DwDRCv_n72pSRNQ4aZfRn9i9gKp7gdUUs5HijCV7mElQoLre8N_9r0WyszyEpIOeTGzByZqOo3ih-yewGtWRvwSkcyheUeImiZYE_hz6hXHK03TFyuW_MvAS3srfb3rExDwjNPm3L8lx_6kVM7xJ55gKrq8WLRaH0shxs1gb2tmsbvnDObjDGFSOqKAsmk8XQb3Zr2khQ9ygwVXi3PmHVsGOr85wLy10M7T6b_s3Et7A1qrTwQ39FzLKM2UC2PCvCWgRVocdMHiw1OzrLRr0Oosg0oX-lZlgKUmBsV5b8uhncxY7iIXud2xw6hfM9q0YnMxVBsQMzhWhyBCLK_IRYST-4gy_S_S6tQnxcJIJkWo-H5AQb8YuVyZOmxBBlUh3MEQ8vmvmCnmTEPeNhyvxGkT06U5eUwX6rWWGUG1D4Xl7iLLghjiel3kmqTOKUwXCpxhC-8ggnDJaHk695FxSM5YGoRs6qwJKmb8QyZWOq3z2WZscq5WECj-_EZPSdnmiFxwByx1vI39p6-Zslk0Cd0jc-LRnAVUPpH59u1l6QvClBNt64GrwYc_E-q71q86XJvDRfIHwhrzeDZCm52jbHFlc9MC8ISeHe8uWyTQgqhbRzja7T9M1G_cSdjhmH1H1FZ3TZ9mA=w331-h330-s-no?authuser=0',
  },
  {
    type: 'health',
    name: 'Mung Bean',
    price: '20',
    discount: '9',
    id: 'p5',
    description: 'abcd',
    additionalInfo: 'abcde',
    overview: 'abcdef',
    link: 'https://lh3.googleusercontent.com/aHROSDY_mBrIQpbxTHtxt-shNw9EYEklz9tMnX8n2G7ejHeIgpiIDyM6qz6ax7Dax7Eg1ZohcbQDxSAbw6QiWPhdYrzjLr2DdPT2hmmg7KZrx5zcr0Blnxt1sldBxxHJ2mmo_4Lkvnufvc_EEejyEhC9pd7EMmR16bp7rrhebNapg9WPD_Fr1vsgUIJyrZtPVCUdKuVv9tIAHMsqJrRBCvUQZVk3UQloEGyLaOX9VuqQOC2eBwcCZJt5PsMVk5ZtWl27YSWs-caQgmpv1iNeYR-dGgur2LZRpDQWC48sYwBrjVhi8bYlBAluzXWID-BJ-mWDHB8zOkeBUQs-Cu3j6jWi2yjBAnccoB7Br_-EmRCygQ7GNbC7xNNSl1XiMG9CZiVbeKNJ1D_GjkkM3QX6UN4XTrZOzS_DZ2Bd80f5HekATP6L_v_dAqzKeqFyqOstL9WEY3ayr55iQF45fhm3Eb5O9DDlBJUFEP3zRxnoJT9cCvWRheB6NPPbjoYUa8kBhW8g-CE9ganzOiJNWoNhs2dqNzF5k9dwe4ts90f70lHUm-FiBQKNriQwM2WiYm8quf55lsGw_XlfAe0wqLZ4TaUNdrrXpxS9tDTjerIaxC13M6Pw5wXXb8HqZMOSQxEdG_fMUMGJeVxaMB1GxZ78_80j0r4sxrYrpOyA7bVrV9WClmOHXTXg6PAbXzqqyRFKKWw94qeUQqOO7QJpCzjRcOOlAvWYA4_10TrnXsYc9DZWzi8vV5Vlv_eWlQ4QcQpvfthCKlYbSkEzNJCyUbSQRQUmLHiePzUzRKrV-5MB2w4ZymvHr8nD7ggaXLR3yOCLMFYG3_5mxjHpOGwYqZ-MynIltY59M30vnjeUnOSWd22syshNQts_W53eW-R6sJ60roBSKN8cEda0Hrrze4-2Fmq9HFM5xB-hzQ_6yoRtKdkgktCL2NkqNmGqHkoQdsyg-o2Dvwp68OtztuTkmnG9Vp0AV3bFNmiy1NGvMSHQ16iim-cnk5GjSG3YwZADQw36K6dMGbFTKc82-z3aU6N5bQh6IA=w335-h359-s-no?authuser=0',
  },
  {
    type: 'nuts',
    name: 'Brown Hazelnut',
    price: '20',
    discount: '8',
    id: 'p6',
    description: 'abcd',
    additionalInfo: 'abcde',
    overview: 'abcdef',
    link: 'https://lh3.googleusercontent.com/xvlHwOMk9oqgnPJujCbzqESv6naytyJ8GbL4YcMrO36gcj6685I8kuq8q66XWX4uMDcuXVGMZlXTG83LPz1zfinEO8LIayYlZVU2xbDcC3NtbHY8eorvVxutTWPhVWgli7XaXJdLqZZwv6Zvqz84KNoLyTyaY1KoPsKXpHPIu91keXGA_GUQ3gmWbfQ3uJZrAf_NkIc8T1MdtJugMxGEO2HtAR1M4IN8hHANofuo6f6EdBdTOdoQlgLptRENzud4JyvKbuPef23Ha0X46jtazg1dle3RNwKiqU784M92Q8yaZVFlbR5qwKwsrLneGe00lUTBNaPR5ew4ObpK0M8nLuFePBILJ-unoZHRHDUAoHMvaCl9ZVEU3zNcTkoLH8JSLGueaCMDE6VcQJcSu8XsZ69b-Eoekrdh_bGABprAs43DpTYP_wIGNJy8G9G-6RsEmfCUdJOYyHBZp_8stPaTobSdKMivfhahb07mexrEiOCuPN0wQQo-2Hw3LGwijNONWIrp9mQ0qJAFa7652CuEF3lfgqBLO296ZMxdxamPzeKkpecVAwRjnaPFZj1ahvYjbm5UuYtv4-7vHp95TE8Kt7vrvPbBBzTIaOgKQD31Eh0YPRQozyFwUEZ1Re_3TwXnci4rKmMl8B6OTaknTFSHRE7hUChl5evpGQrajZgF-whpUjrEQnfEUklzBYVlrF7gYAv8IxdmIQhCzwTlZMbP-HjZFepIJG6S3nrOSof2jX3bkeLN_YzGe3NfcLJ1sR4hSopuk3vqHt8Q61WDkQw_5iYpuKgsHmggLqlWNHu5R0qfjZlF5rtsd8LrY_l8HRDcqWcv_NPcLEDaLzlnDUJBxdxh9f62EdcakcdNZhCfiMSKY899HuNs1xuv1WkEN1hw9CqESAU3DgYG6M4L5RV0T-bHHJh9SrjG4jQ2cAi2clo1YLIfopd5OhujTjE2A26SIUtJdriX3D7WYPiR9q_e-lG2Hv_8Etmc9oNPLhH-SFokIdcffe3NJQJl2RxfwBvAodZv0zqxp92U215GVCbLaV-Ypw=w251-h334-s-no?authuser=0',
  },
  {
    type: 'fresh',
    name: 'Eggs',
    price: '20',
    discount: '3',
    id: 'p7',
    description: 'abcd',
    additionalInfo: 'abcde',
    overview: 'abcdef',
    link: 'https://lh3.googleusercontent.com/ZBh9z2A9Qtprd5jWjzI5_TkmI2nTNf4xXlpT9yWrISFIXe40bWMqRIxD4H62Qlo3YIZtBKjP4vMq9FtolCT_5xYdq1GRp4MEVC6K6OZOTndJvIu8_4KUK9EpTrPdadUNgVD9PY-_v1hfhteWIgmF_l2NGddKLldCx7sz5nESkTObSjNG4AicEV2xyJf99wyPuCv7lhxpEOEyl9kRFe9jbegYSMheY_E43tV225-igm24nwHxBGw6TjbNRPc2-h-Z-tNQyIEMzu7V2EccBPA9DahxAxFc3ZjlpVu39y7Q6vKt7El-3NOjiEuwZWNLtkNiT-rS8lPiPGvAL6DHf1LK0gslbo-41RL4QwVcGbJM381da9SHMChl0yasJrV9UI5YvGpjJ3ULefbhOEo73ml2Gkl8LCRB7BwKEsWWhb5BctYD9t6AkCzhPeiIng5bNZALhcIUn-jxNfAXSedE3HwywKsN9NFLR9J7lfjyEJGzu9jEmlZvbXvxOY3M4VocEUAoFWVjmR2oEvNWe9U2-pCpo6YTeaHbZkY4duWMs2YG32gMt7IWsA0uuSNdBBKa7pMYZ_XxmrOCwxWxh2zW-KpVIB6I-NQ0QwqSdejrqLmDkou4G1YYVDAS-xbabf69_v_xGnskz7cIOyig2sJ0HkCy5ZZ69ywZ9fEVmSVxwXr7uoJGmzISezIjOvKCcnbOgO6tQt1xZM9tOGkFK3UHNNyp8E_a_kwVEQKGXX-X9lV47MPT9A-sFDBW6c1t39_otgP55Sqa0n6lf9eTRjGNICnmhfPqRdOlVpxwoqniqYFlidZmC4M5eIOw_a-QKZDq8A0jmNSNe6sQGnClr5C9Oo3zqI7VElr4mDvgDf4jvOCcY8ZUMAHJN7vh9FYY4CsqESOW7QiU7v0VtbefsnH7NOvE8cJE3j763w1KSiJuVn7gsfM_QJeToOfgATSpkxnIXrA44tUirxswFZVnKncriDZ60sg2thgVUd_4-k4NUIjMvOI60nxfmYH1vcSlT6JwmgLYeFfQuQvpqEigWAxXjnroGgi5GQ=w336-h392-s-no?authuser=0',
  },
  {
    type: 'fresh',
    name: 'Zelco Suji Elaichi Rusk',
    price: '20',
    discount: '5',
    id: 'p8',
    description: 'abcd',
    additionalInfo: 'abcde',
    overview: 'abcdef',
    link: 'https://lh3.googleusercontent.com/t2cnnrBgbQv6YDirlX-eO-5IiV7yYeS4f8l0ptN7lIC8CxYyXYogAGm6FtddamKzAXUmPvAzfPnVAkBBj0nmhOJkhAJ0lw3sNHyeADUPBgzIUtnFYbS5mAxVwl-0_vXLEUr8xqOQ5qJPZgTcGX7vw0KW-kcnBxq8UUy1Tu8GGdHmCrbS63dtpUELfHw5YDONHWRfJXvBJpVgH4PoCHxDv3oVImUQamE3vCwVL_7Pdrk1_O6rreTNW-YUgnynYih8kBmUyLv7iFFoXlMehovi-px4tepSKnTH39f6GtaYEitODTFH-GZ2u_OvDPdmY5ZJvxdfw0ivZjJFjD2EtRJnXFV9Z_0__qSeWR0DdDqtlkMvbUIcMqtNipQUC0dKmuOX0TN7bANW2sBbEmNWDl-3RF8G1Fqd5G1zP_CJNSwSFRGFiAtcZSHez9cBbup7X37HJ1uZUkZWlorhhJfclOz_cftFS3GEDoCxrmQvzwvXOHQK5e2szAlxzh3cL1RP7PKejeMZ3AatmnbTbi2KxgUjsbtqHKxWXuuYx_16Si0g74o4cetxtWQFdvQgHx1zrh3CIOpwezd5l_sGk0AjMOGpEeve1glIsHafzNXxff7lwDDR5od16VrV7slX1yp3f7Z18cW_apbEnc2UVYCo-PPdlJ5yu46swN8ki0XgM3r6OYwWFa1pWTyltT__I92bj1SKrvOUQjvC5yHKOm0yUQlQ8LZ7HMf8DpbB_JuFGuIWxUyAVhdz1KZmcc20L8jvp84kb-Op3haaryu3-9VmZao_BXqeu2FIbZGkw-opcgXh_lo2MTC67DIusc_GajL61EPa6iAbvW-2OCCoie760yqShBJw6GyXlcbgg1P7y9w1C8xpoI9AKm34bTwJ1VndiPI-Fo0rgs4v-x9AVZeEcXWvDZIWbmwqIzCRJhshNtGToOTA4T2A3w47GLo0uqcRuSHTJ7xaW6qfX1h80JyKVjughIBMRodXQQ8Cx_sdQwo75ULxHo6YuZgG80ccPS6Lr_L5_4-6UdBSsqK0Mk4Oepy6de4kgw=w336-h362-s-no?authuser=0',
  },
];

const subheadingStyles = {
  textAlign: 'center',
  marginBottom: '1rem',
};
const headingStyles = {
  textAlign: 'center',
  marginBottom: '4rem',
};

const containerStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '2rem',
};

const Products = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const selectItemHandler = productId => {
    const selectedItem = DUMMY_DB.find(element => element.id === productId);
    setActiveItem(selectedItem);
  };

  const openModalHandler = () => {
    setIsModalActive(true);
  };

  const closeModalHandler = e => {
    e.preventDefault();
    setIsModalActive(false);
    setActiveItem(null);
  };

  return (
    <div className={styles.categories}>
      <Subheading style={subheadingStyles}>Categories</Subheading>
      <Heading style={headingStyles}>Our Products</Heading>

      <Container style={containerStyles}>
        {/* {DUMMY_DB.map(product => (
          <Product
            type={product.type}
            name={product.name}
            price={product.price}
            discount={product.discount}
            onOpenModal={openModalHandler}
            key={product.id}
          />
        ))} */}

        {DUMMY_DB.map(product => (
          <Product
            type={product.type}
            name={product.name}
            price={product.price}
            discount={product.discount}
            onOpenModal={openModalHandler}
            onSelectItem={selectItemHandler}
            key={product.id}
            id={product.id}
            link={product.link}
          />
        ))}
      </Container>

      {isModalActive && (
        <React.Fragment>
          <ProductForm
            selectedProduct={activeItem}
            onClose={closeModalHandler}
          />
          <ProductBackdrop onClose={closeModalHandler} />
        </React.Fragment>
      )}
    </div>
  );
};

export default Products;
