import { Component, OnInit } from '@angular/core';
import { SurveyCreatorModel } from "survey-creator-core";
import * as SurveyCore from 'survey-core';
import { SurveyCreatorModule } from "survey-creator-angular";
import { SvgRegistry, Serializer } from 'survey-core';
import { Converter } from "showdown";
import { surveyJson } from '../../../assets/survey.json';
import "survey-core/survey.i18n.js";
import "survey-creator-core/survey-creator-core.i18n.js";
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";
import { autocomplete } from "surveyjs-widgets";

autocomplete(SurveyCore);

Serializer.addProperty("paneldynamic", { name: 'startItemIndex',  type: 'number',  category: 'general', } );
Serializer.addProperty("paneldynamic", { name: 'isSingleItemEditMode', type: 'boolean', category: 'general', } );
Serializer.addProperty("paneldynamic", { name: 'isFirstItemHidden', type: 'boolean', category: 'general', } );
Serializer.addProperty("paneldynamic", { name: 'goToPageOnAddorEdit', type: 'string', category: 'general', } );
Serializer.addProperty("paneldynamic", { name: 'hasEditAction', type: 'boolean', category: 'general', } );

SvgRegistry.registerIconFromSvg('icon-prepareToApply','<svg th:fragment="prepareToApply" aria-hidden="true" width="100" height="75" viewBox="0 0 100 75" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.7894 33.777C20.7392 23.5204 20.2149 12.2543 28.0882 5.59909C36.1615 -1.2251 47.6387 -0.763551 57.9697 1.50406C68.4313 3.80034 78.2399 8.66379 83.7732 17.8218C90.0313 28.1793 93.7695 41.113 88.4755 51.9935C83.1963 62.8436 70.4027 66.2598 58.7169 69.3187C46.3241 72.5628 31.6402 77.9786 22.1853 69.3461C12.945 60.9095 18.6366 46.2261 19.7894 33.777Z" fill="#89ccbb"/><path d="M69.0053 39.2656H33.9932V41.1906H69.0053V39.2656Z" fill="black" fill-opacity="0.5"/><path d="M69.0053 32.7769H33.9932V34.7019H69.0053V32.7769Z" fill="black" fill-opacity="0.5"/><path d="M69.0053 26.2856H33.9932V28.2106H69.0053V26.2856Z" fill="black" fill-opacity="0.5"/><path d="M69.0053 19.7964H33.9932V21.7214H69.0053V19.7964Z" fill="black" fill-opacity="0.5"/><rect x="21.5" y="8.5" width="61" height="48" rx="4.5" fill="white" stroke="black" stroke-width="3"/><rect x="30" y="16" width="44" height="28" rx="3" fill="#D8F2F2"/><line x1="36" y1="21" x2="68" y2="21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="36" y1="27" x2="68" y2="27" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="36" y1="33" x2="68" y2="33" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="36" y1="39" x2="68" y2="39" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="21.5" y1="49.5" x2="82.5" y2="49.5" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><line x1="59.4826" y1="56.7719" x2="61.4826" y2="69.7719" stroke="black" stroke-width="3"/><line x1="45.4826" y1="57.2281" x2="43.4826" y2="70.2281" stroke="black" stroke-width="3"/><line x1="35.5" y1="69.5" x2="67.5" y2="69.5" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0"><rect width="100" height="75" fill="white"/></clipPath></defs></svg>');
SvgRegistry.registerIconFromSvg('icon-documentAndEnvelope','<svg th:fragment="documentAndEnvelope" width="100" height="75" viewBox="0 0 100 75" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g clip-path="url(#clip0_67_638)"><path fill-rule="evenodd" clip-rule="evenodd" d="M28.9188 69.2452C22.4102 66.0322 15.1926 63.244 11.4206 57.0399C7.55331 50.6792 7.73198 42.7951 8.32184 35.3682C8.91953 27.8428 10.0387 19.9886 14.827 14.1501C19.5764 8.35899 27.0699 5.94509 34.233 3.77398C41.1602 1.67438 48.4537 -0.11821 55.4148 1.84812C62.2601 3.78172 67.5159 9.01225 72.0836 14.4658C76.431 19.6563 79.154 25.7624 80.9219 32.302C82.8083 39.2793 84.9367 46.6273 82.6319 53.4828C80.278 60.4846 74.5707 65.8813 68.314 69.8045C62.2824 73.5865 55.2028 75.2429 48.0898 75.1419C41.2647 75.045 35.0374 72.2657 28.9188 69.2452Z" fill="#7AC943"/><path d="M62.7451 5.58673L24.295 5.55811C21.4325 5.55811 19.1114 7.8841 19.1114 10.7612L19.0402 60.7163C19.0331 63.5934 21.3542 65.9337 24.2166 65.9337L62.7451 65.9623C65.6075 65.9623 67.9288 63.6363 67.9288 60.7592L68 10.7612C68 10.7612 68 5.58673 62.7451 5.58673Z" fill="#FFF2FF" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M46.9463 55.0057C46.9463 53.3882 45.743 52.923 44.4471 52.6653L43.7564 52.5365C42.7382 52.3433 42.6598 52.0642 42.6598 51.692C42.6598 51.2053 43.1227 50.9119 43.8988 50.9119C44.8173 50.9119 45.0523 51.3485 45.152 51.6777L45.1591 51.7063C45.273 51.9926 45.5436 52.1644 45.8783 52.1644C45.9637 52.1644 46.042 52.15 46.099 52.1429C46.455 52.0785 46.7113 51.8065 46.7113 51.4845C46.7113 51.4057 46.6971 51.327 46.6686 51.2483C46.4835 50.69 45.9637 49.8026 44.5325 49.6022V48.6432C44.5325 47.8416 43.2081 47.8416 43.2081 48.6432V49.6094C41.6701 49.8384 41.1004 50.8332 41.1004 51.6992C41.1004 53.2737 42.254 53.7103 43.3861 53.9321L44.1337 54.0824C45.1947 54.29 45.3798 54.5476 45.3798 55.0271C45.3798 55.6068 44.86 55.9575 43.9913 55.9575C42.8663 55.9575 42.6314 55.478 42.4818 54.9341C42.3893 54.6335 42.1044 54.4403 41.7555 54.4403C41.6772 54.4403 41.6202 54.4474 41.5419 54.4617L41.5206 54.4689C41.1574 54.5476 40.9153 54.8196 40.9153 55.1416C40.9153 55.206 40.9295 55.2561 40.9367 55.2991L40.9509 55.3492C41.1147 55.8716 41.4778 57.0167 43.2793 57.2744V58.2835C43.2793 58.6843 43.6139 58.8918 43.9415 58.8918C44.269 58.8918 44.6037 58.6843 44.6037 58.2835V57.2959C46.0207 57.0955 46.9463 56.2295 46.9463 55.0057Z" fill="#FFF2FF"/><path d="M35.7069 31.4307H58.6243" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M35.7069 41.8481H58.6243" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M31.1334 29.5107H27.3738V33.2896H31.1334V29.5107Z" fill="#FFF2FF" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M31.1334 39.9272H27.3738V43.7061H31.1334V39.9272Z" fill="#FFF2FF" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M35.7069 21.1777H58.6243" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M31.1334 19.0933H27.3738V22.8721H31.1334V19.0933Z" fill="#FFF2FF" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M55.7652 9.8195L22.0482 9.79199C19.2984 9.79199 17.0684 12.0266 17.0684 14.7905L17 62.7821C16.9932 65.5461 19.2231 67.7944 21.973 67.7944L58.9871 67.8219C61.737 67.8219 63.967 65.5874 63.967 62.8234L64.0354 18.2627L55.7652 9.8195Z" fill="white"/><path d="M55.7652 18.2636L55.7652 9.8195L63.967 18.2636H55.7652Z" fill="white"/><path d="M55.7652 9.8195L22.0482 9.79199C19.2984 9.79199 17.0684 12.0266 17.0684 14.7905L17 62.7821C16.9932 65.5461 19.2231 67.7944 21.973 67.7944L58.9871 67.8219C61.737 67.8219 63.967 65.5874 63.967 62.8234L64.0354 18.2627L55.7652 9.8195ZM55.7652 9.8195L55.7652 18.2636H63.967L55.7652 9.8195Z" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M33.0122 34.6489H55.0288" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M25.0059 49.8169L55.0285 49.8169" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M25.0059 42.8115L55.0285 42.8115" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M25.0059 56.8223L55.0285 56.8223" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M28.6177 32.8037H25.0059V36.434H28.6177V32.8037Z" fill="#FFF5FF" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M33.0122 24.7983H55.0288" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M28.6177 22.7959H25.0059V26.4262H28.6177V22.7959Z" fill="#FFF5FF" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M38.0327 49L38 73.9107L83.9673 74L84 49.0893L38.0327 49Z" fill="#FFF7E3" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M38 49L61.5 60L83 49" stroke="black" stroke-width="3" stroke-linejoin="round"/></g><defs><clipPath id="clip0_67_638"><rect width="100" height="75" fill="white"/></clipPath></defs></svg>');
SvgRegistry.registerIconFromSvg('icon-school','<svg th:fragment="school" aria-hidden="true" width="100" height="75" viewBox="0 0 100 75" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1:1018)"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.0511 1.0075C54.2782 1.12712 59.9336 3.72517 65.5026 6.49109C71.6785 9.55841 79.4731 11.6625 82.1872 17.9616C84.9 24.2576 80.0384 31.0673 79.0088 37.8375C77.9884 44.5473 79.6781 51.7601 76.1623 57.5813C72.3806 63.8427 66.3388 69.4059 59.1115 70.7817C52.0196 72.1317 45.6741 66.867 38.7929 64.6948C32.1036 62.5832 24.1256 63.1812 19.2292 58.1922C14.2732 53.1424 12.8944 45.4664 13.0062 38.4203C13.1089 31.9485 16.8063 26.377 19.825 20.6385C22.6851 15.2016 25.0973 9.33304 30.1597 5.81216C35.323 2.22116 41.746 0.886381 48.0511 1.0075Z" fill="#9BCBEB"/><path d="M86.9998 54.8765L79.4472 47.1409L71.8945 54.8765V74H86.9998V54.8765Z" fill="#FFF7E3" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M82.9648 64.3665C82.9648 62.3967 81.5615 61.8324 80.051 61.5144L79.2519 61.3502C78.063 61.1143 77.9752 60.7757 77.9752 60.3243C77.9752 59.7293 78.5112 59.3804 79.4175 59.3804C80.4895 59.3804 80.7623 59.9139 80.8695 60.314L80.8793 60.3448C81.0157 60.6936 81.3276 60.8988 81.7174 60.8988C81.8148 60.8988 81.9123 60.8886 81.9805 60.868C82.3996 60.786 82.6919 60.4577 82.6919 60.0678C82.6919 59.9755 82.6725 59.8729 82.6433 59.7805C82.4289 59.0932 81.8246 58.0159 80.1581 57.7697V56.6001C80.1581 55.6255 78.6184 55.6255 78.6184 56.6001V57.78C76.8253 58.057 76.1626 59.2676 76.1626 60.3243C76.1626 62.2428 77.5074 62.7763 78.823 63.0533L79.6904 63.238C80.928 63.4842 81.1424 63.8125 81.1424 64.387C81.1424 65.0949 80.5382 65.5156 79.5247 65.5156C78.2091 65.5156 77.946 64.9308 77.7608 64.2742C77.6536 63.9048 77.3223 63.6791 76.913 63.6791C76.8253 63.6791 76.7473 63.6894 76.6694 63.7099H76.6401C76.2211 63.8125 75.9287 64.1408 75.9287 64.5307C75.9287 64.6025 75.9385 64.664 75.9482 64.7153L75.958 64.7769C76.1529 65.413 76.5718 66.8082 78.6671 67.1263V68.3574C78.6671 68.8499 79.0569 69.1064 79.437 69.1064C79.8171 69.1064 80.2069 68.8499 80.2069 68.3574V67.1468C81.8831 66.9211 82.9648 65.8644 82.9648 64.3665Z" fill="#FFC240"/><path d="M72.3627 43.4885H20.9951C20.9951 43.4885 20.9951 16.455 46.674 16.455C72.3627 16.455 72.3627 43.4885 72.3627 43.4885Z" fill="white" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M79.3012 16.2292L45.6505 4L12 16.2292L45.6505 29.9768L79.3012 16.2292L79.4474 46.2585L79.3012 16.2292Z" fill="white"/><path d="M79.3012 16.2292L45.6505 4L12 16.2292L45.6505 29.9768L79.3012 16.2292ZM79.3012 16.2292L79.4474 46.2585" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_1:1018"><rect width="100" height="75" fill="white"/></clipPath></defs></svg>');
SvgRegistry.registerIconFromSvg('icon-face','<svg th:fragment="face" width="100" height="75" viewBox="0 0 100 75" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M82.3614 41.0488C81.463 50.751 81.9589 61.4081 74.5111 67.7036C66.8742 74.1589 56.0174 73.7223 46.2449 71.5772C36.3488 69.4051 27.0703 64.8045 21.8361 56.1416C15.9163 46.3439 12.3802 34.1093 17.388 23.817C22.3818 13.5534 34.4839 10.3218 45.5381 7.42822C57.261 4.35955 71.1512 -0.763551 80.095 7.40236C88.8358 15.3829 83.4519 29.2726 82.3614 41.0488Z" fill="#9BCBEB"/><circle cx="50" cy="38" r="23.5" fill="white" stroke="black" stroke-width="3"/><circle cx="42" cy="37" r="3" fill="black"/><circle cx="57" cy="37" r="3" fill="black"/><path d="M56.3218 29.3882C47.5 25.0788 43.5 16.4999 43.5 16.4999C43.5 16.4999 45 22.4705 39.1264 27.6588C33.2529 32.847 28 33.9999 28 33.9999C28 33.9999 29.9258 26.02 33.0575 22.4705C36.315 18.7784 43.5 16.4999 43.5 16.4999C43.5 16.4999 53.2874 12.6705 61.8851 17.8587C70.4828 23.0469 72 32.2704 72 32.2704C72 32.2704 65.1437 33.6975 56.3218 29.3882Z" fill="black"/><path d="M43.5 16.4999C43.5 16.4999 47.5 25.0788 56.3218 29.3882C65.1437 33.6975 72 32.2704 72 32.2704C72 32.2704 70.4828 23.0469 61.8851 17.8587C53.2874 12.6705 43.5 16.4999 43.5 16.4999ZM43.5 16.4999C43.5 16.4999 45 22.4705 39.1264 27.6588C33.2529 32.847 28 33.9999 28 33.9999C28 33.9999 29.9258 26.02 33.0575 22.4705C36.315 18.7784 43.5 16.4999 43.5 16.4999Z" stroke="black"/></svg>');
SvgRegistry.registerIconFromSvg('icon-raceAndEthnicity','<svg th:fragment="raceAndEthnicity" aria-hidden="true" width="100" height="75" viewBox="0 0 100 75" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M46.2335 72.1729C35.8382 71.2103 24.4199 71.7417 17.6748 63.7619C10.7584 55.5795 11.2261 43.9472 13.5244 33.4767C15.8517 22.8737 20.7809 12.9325 30.0626 7.32444C40.5601 0.9818 53.6686 -2.80697 64.6961 2.55855C75.6928 7.9091 79.1552 20.8757 82.2555 32.7194C85.5433 45.2797 91.0324 60.162 82.2832 69.7447C73.7326 79.1097 58.8508 73.3413 46.2335 72.1729Z" fill="#9BCBEB"/><path d="M49.5 62C64.6878 62 77 49.6878 77 34.5C77 19.3122 64.6878 7 49.5 7C34.3122 7 22 19.3122 22 34.5C22 49.6878 34.3122 62 49.5 62Z" fill="#EEFFE6"/><path d="M49.5 7C49.5 7 38.4852 19.0347 38.4852 34.5C38.4852 49.9653 49.5 62 49.5 62" fill="#EEFFE6"/><path d="M50.5941 62C50.5941 62 61.6089 49.9653 61.6089 34.5C61.6089 19.0347 50.5941 7 50.5941 7" fill="#EEFFE6"/><path d="M77 34.5C77 49.6878 64.6878 62 49.5 62M77 34.5C77 19.3122 64.6878 7 49.5 7M77 34.5H22M49.5 62C34.3122 62 22 49.6878 22 34.5M49.5 62C49.5 62 38.4852 49.9653 38.4852 34.5C38.4852 19.0347 49.5 7 49.5 7M22 34.5C22 19.3122 34.3122 7 49.5 7M50.5941 62C50.5941 62 61.6089 49.9653 61.6089 34.5C61.6089 19.0347 50.5941 7 50.5941 7" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M47.3977 47.1526C47.3977 51.2483 44.2382 54.4534 40.4796 54.4534C36.721 54.4534 33.5615 51.2483 33.5615 47.1526C33.5615 43.057 36.721 39.8519 40.4796 39.8519C44.2382 39.8519 47.3977 43.057 47.3977 47.1526Z" fill="white" stroke="black" stroke-width="3"/><path d="M40.975 58.8059C39.1722 58.8515 36.7109 58.1268 35.5119 57.7316C35.0478 57.5786 34.5449 57.5793 34.0984 57.7777C33.0572 58.2405 31.168 59.184 30.678 60.1277C29.9916 61.4497 29.9915 60.7886 29.3051 64.0932C28.8798 66.1407 28.9815 68.1882 29.1204 69.4497C29.2051 70.2189 29.7839 70.8165 30.5433 70.9656C32.5066 71.3512 36.566 72.0244 40.975 72.0243C45.0882 72.0242 48.5929 71.4383 50.4761 71.0467C51.3576 70.8634 51.9566 70.0796 51.9065 69.1807C51.8357 67.9088 51.6682 66.001 51.2719 64.0932C50.5855 60.7886 50.5854 61.4494 49.899 60.1277C49.446 59.2554 48.0958 58.383 47.2301 57.8905C46.7501 57.6175 46.1751 57.5976 45.652 57.7746C44.5371 58.1519 42.5006 58.7672 40.975 58.8059Z" fill="white" stroke="black" stroke-width="3"/><path d="M66.9338 46.8007C66.9338 50.8963 63.7743 54.1014 60.0157 54.1014C56.2571 54.1014 53.0977 50.8963 53.0977 46.8007C53.0977 42.7051 56.2571 39.5 60.0157 39.5C63.7743 39.5 66.9338 42.7051 66.9338 46.8007Z" fill="black" stroke="black" stroke-width="3"/><path d="M60.5111 58.4539C58.7083 58.4996 56.247 57.7749 55.0481 57.3797C54.584 57.2267 54.081 57.2273 53.6345 57.4258C52.5934 57.8885 50.7041 58.8321 50.2141 59.7758C49.5277 61.0978 49.5276 60.4367 48.8412 63.7413C48.4159 65.7888 48.5176 67.8362 48.6566 69.0977C48.7413 69.8669 49.32 70.4645 50.0794 70.6137C52.0427 70.9993 56.1021 71.6725 60.5111 71.6724C64.6243 71.6723 68.129 71.0864 70.0123 70.6948C70.8937 70.5115 71.4927 69.7277 71.4427 68.8288C71.3719 67.5569 71.2044 65.6491 70.8081 63.7413C70.1216 60.4367 70.1215 61.0975 69.4351 59.7758C68.9821 58.9035 67.632 58.031 66.7662 57.5386C66.2862 57.2656 65.7112 57.2456 65.1881 57.4227C64.0732 57.8 62.0367 58.4153 60.5111 58.4539Z" fill="black" stroke="black" stroke-width="3"/></svg>');
SvgRegistry.registerIconFromSvg('icon-docWithMagnifyingGlass','<svg th:fragment="docWithMagnifyingGlass" aria-hidden="true" width="100" height="75" viewBox="0 0 100 75" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.8641 69.286C38.8847 68.3619 27.9231 68.872 21.4478 61.2114C14.808 53.3563 15.2571 42.1893 17.4634 32.1376C19.6976 21.9587 24.4296 12.4152 33.3401 7.03147C43.4177 0.942532 56.0019 -2.69467 66.5883 2.45622C77.1451 7.59275 80.469 20.0406 83.4453 31.4106C86.6016 43.4685 91.8711 57.7555 83.4719 66.9549C75.2633 75.9454 60.9768 70.4076 48.8641 69.286Z" fill="#9BCBEB"/><path d="M65.2854 9.19509L30.2462 9.1665C27.3885 9.1665 25.0711 11.4887 25.0711 14.3611L25 64.2347C24.9929 67.1071 27.3103 69.4436 30.168 69.4436L68.6337 69.4721C71.4914 69.4721 73.8089 67.1499 73.8089 64.2776L73.8799 17.9694L65.2854 9.19509Z" fill="white"/><path d="M65.2854 17.9703L65.2854 9.19509L73.8089 17.9703H65.2854Z" fill="white"/><path d="M65.2854 9.19509L30.2462 9.1665C27.3885 9.1665 25.0711 11.4887 25.0711 14.3611L25 64.2347C24.9929 67.1071 27.3103 69.4436 30.168 69.4436L68.6337 69.4721C71.4914 69.4721 73.8089 67.1499 73.8089 64.2776L73.8799 17.9694L65.2854 9.19509ZM65.2854 9.19509L65.2854 17.9703H73.8089L65.2854 9.19509Z" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M36 35L51 35" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M36 45L51 45" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M36 25L65 25" stroke="black" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><rect x="78.251" y="48.3169" width="16.0444" height="4" transform="rotate(27.8741 78.251 48.3169)" fill="white"/><line x1="70.8397" y1="42.6535" x2="91.7123" y2="54.4997" stroke="black" stroke-width="3"/><path d="M87.881 59.2242L88.7507 59.7178C88.7507 59.7178 90.9249 60.9518 92.4057 58.3427C93.8865 55.7337 91.7123 54.4997 91.7123 54.4997L90.8426 54.0061" stroke="black" stroke-width="3"/><line x1="67.8781" y1="47.8716" x2="88.7507" y2="59.7179" stroke="black" stroke-width="3"/><circle cx="67" cy="43" r="11.5" fill="#FFF2FF" stroke="black" stroke-width="3"/><path d="M61.7725 36.2874C59.6285 38.0346 58.4225 40.4538 58.0205 43.1418C57.8865 43.8138 58.4225 44.4858 59.2265 44.6202C60.0305 44.6202 60.5665 44.0826 60.7005 43.4106C60.9685 41.3946 61.9065 39.6474 63.3805 38.3034C63.9165 37.9002 64.0505 36.9594 63.5145 36.4218C63.2465 35.8842 62.4425 35.8842 61.7725 36.2874Z" fill="black"/></svg>');

const creatorOptions = {
  showTranslationTab: true,
  showLogicTab: true,
  showThemeTab: true,
  isAutoSave: true
};

const converter = new Converter();

@Component({
  selector: 'app-survey-creator',
  standalone: true,
  imports: [ SurveyCreatorModule ],
  templateUrl: './survey.creator.component.html',
  styleUrl: './survey.creator.component.css'
})
export class SurveyCreatorComponent implements OnInit {

  surveyCreatorModel!: SurveyCreatorModel;

  doMarkdown(survey: any, options: any) {
    var str = converter.makeHtml(options.text);
    // remove root paragraphs <p></p>
    str = str.substring(3);
    str = str.substring(0, str.length - 4);
    // set html
    options.html = str;
  };
  static onDynamicPanelAdded(sender: SurveyCore.Model, options: SurveyCore.DynamicPanelModifiedEvent) {
    sender.currentPage = options.question['goToPageOnAddorEdit'];
    sender.getAllQuestions().forEach(q => {     
      if(q.getType() === "paneldynamic") 
      SurveyCreatorComponent.setVisibleDynamicPanel((q as SurveyCore.QuestionPanelDynamicModel),options.question.panels.length);         
    });
  }

  static onDynamicPanelItemValueChanged(sender: SurveyCore.Model, options: SurveyCore.DynamicPanelItemValueChangedEvent) {
    if (options.name == "edit" && options.value && options.question['goToPageOnAddorEdit'].length > 0)
    {
      options.value = false;
      sender.currentPage = options.question['goToPageOnAddorEdit'];
      sender.getAllQuestions().forEach(q => {     
        if(q.getType() === "paneldynamic") 
        SurveyCreatorComponent.setVisibleDynamicPanel((q as SurveyCore.QuestionPanelDynamicModel),options.panelIndex + 1);         
      });
    }
  }

  static onGetPanelFooterActions(sender: SurveyCore.Model, options: SurveyCore.GetPanelFooterActionsEvent) {
    const panel = options.panel;
    const paneldynamic = options.question;
    if (paneldynamic?.getPropertyValue('hasEditAction')) {
      options.actions.push({
        id: "panel-edit-" + panel.id,
        title: "edit",
        action: () => {
          sender.getAllQuestions().forEach(q => {     
            if(q.getType() === "paneldynamic") {
              const panelIndex =paneldynamic.panels.indexOf(panel);
              sender.currentPage = paneldynamic.getPropertyValue('goToPageOnAddorEdit');
              SurveyCreatorComponent.setVisibleDynamicPanel((q as SurveyCore.QuestionPanelDynamicModel), panelIndex + 1);         
            }
           });
          }
      })
    }
  }

  static setVisibleDynamicPanel(panel: SurveyCore.QuestionPanelDynamicModel, index: number) {
    if (index > 0) {
      var isSingleItemEditMode = panel['isSingleItemEditMode'];
      //if isSingleItemEditMode (necessary for "list" type dynamic panels because setting currentIndex doesn't work for that type of panel), 
      //only show the specified panel and hide all of the others    
      if (isSingleItemEditMode) {
        var currentPanelIndex = 1;
        panel.panels.forEach(p => {
          p.visible = currentPanelIndex == index; 
          currentPanelIndex++;
        })
      } 
      //otherwise set the current panel index to the specified index
      else{
        panel.currentIndex = index;
      } 
    }      
  }
  ngOnInit() {

    const creator = new SurveyCreatorModel(creatorOptions);

    creator.JSON = surveyJson;

    creator.onSurveyInstanceCreated.add((sender,options) => {
      if(options.reason === "test")  {
       var survey = options.survey;

      //initialize visible dynamic panels
      survey.getAllQuestions().forEach((q: SurveyCore.Question) => {     
        if(q.getType() === "paneldynamic") {
          var panel = (q as SurveyCore.QuestionPanelDynamicModel);
          var isFirstItemHidden = q['isFirstItemHidden'];    
          SurveyCreatorComponent.setVisibleDynamicPanel((q as SurveyCore.QuestionPanelDynamicModel),q['startItemIndex']);  
          if (isFirstItemHidden)
            panel.panels[0].visible = false;       
      }});
      survey.onTextMarkdown.add(this.doMarkdown);
      survey.onDynamicPanelAdded.add(SurveyCreatorComponent.onDynamicPanelAdded);
      survey.onDynamicPanelItemValueChanged.add(SurveyCreatorComponent.onDynamicPanelItemValueChanged);
      survey.onGetPanelFooterActions.add(SurveyCreatorComponent.onGetPanelFooterActions);
    }

  });
    
  this.surveyCreatorModel = creator; 
}
}