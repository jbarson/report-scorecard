const data = {
  report: {
    title: 'Reporting & Analytics Scorecard',
    metadata: { version: 1 },
    orgName: 'Cisco Systems Canada',
    applicationName: 'SalesForce',
    applicationOwner: 'SalesForce Owner',
    departmentName: 'Department Name',
    surveyOpenDate: '2018-01-05T16:36:37.000-05:00',
    surveyCloseDate: null,
    organizationName: 'Cisco Systems Canada',
    responseCount: 13,
  },
  pages: {
    coverPage: {
      slug: 'cover_page',
      id: 'cover-page',
      title: 'Cover',
      heading: 'Report Quality',
      subHeading: null,
      description: null,
      sections: {
        reportTitleSection: {
          slug: 'report_title_section',
          id: 'report-title-section',
          title: 'Title Page',
          description: null,
          datasets: {
            coverInfo: {
              slug: 'cover_info',
              dataSource: { name: 'report_details', resultType: 'single_row' },
              fields: {
                orgName: {
                  slug: 'org_name',
                  title: 'Organization Name',
                  dataType: 'string',
                  minValue: 0,
                  maxValue: 250,
                  sourceField: 'organization_name',
                },
                respondentCount: {
                  slug: 'respondent_count',
                  title: '# of Respondents',
                  dataType: 'integer',
                  sourceField: 'response_count',
                },
                surveyName: {
                  slug: 'survey_name',
                  title: 'Survey Name',
                  dataType: 'string',
                  sourceField: 'survey_name',
                },
                createdOn: {
                  slug: 'created_on',
                  title: 'Created On',
                  dataType: 'date',
                },
                surveyOpenDate: {
                  slug: 'survey_open_date',
                  title: 'Survey Open Date',
                  dataType: 'date',
                  sourceField: 'survey_open_date',
                },
                surveyCloseDate: {
                  slug: 'survey_close_date',
                  title: 'Survey Close Date',
                  dataType: 'date',
                  sourceField: 'survey_close_date',
                },
                appName: {
                  slug: 'app_name',
                  title: 'Application Name',
                  dataType: 'string',
                  sourceField: 'application_name',
                },
                appOwner: {
                  slug: 'app_owner',
                  title: 'Application Owner',
                  dataType: 'string',
                  sourceField: 'application_owner',
                },
              },
              data: {
                respondentCount: 29,
                surveyName: 'Reporting & Analytics Scorecard',
                surveyOpenDate: '2017-12-05T16:36:37.000-05:00',
                surveyCloseDate: null,
              },
            },
          },
        },
      },
    },
    tableOfContents: {
      slug: 'table_of_contents',
      id: 'table-of-contents',
      title: 'Reporting & Analytics Scorecard',
      heading: 'Contents',
      subHeading: null,
      description: null,
      sections: {
        tableOfContentsSection: {
          slug: 'table_of_contents_section',
          id: 'table-of-contents-section',
          title: 'Scorecard Contents',
          description: null,
          datasets: {},
        },
        instructionsSection: {
          slug: 'instructions_section',
          id: 'instructions-section',
          title: 'How to Use the Scorecard',
          description:
            '<p>The Corporate Reporting Effectiveness Report is designed to help you understand, manage and improve key corporate reports. Instructions on each page will help you understand the data and what you can do about it.</p>\n<p>Once you have consumed the report yourself, Info-Tech recommends the following discretionary steps:</p>\n<ol>\n<li><strong>Share Results with Your Data Team</strong> <p>Walk through this report with your team. Cover overall results and key areas, encouraging them to review the full report if interested. Beyond understanding the data, communicating the importance of measuring and improving business satisfaction with reporting & analytics services is critical.</p></li>\n<li><strong>Provide Training as Requested</strong> <p>Use the Training View to book training immediately for interested business leaders and teams. Work with your team to establish who should lead each training session.</p></li>\n<li><strong>Communicate Results and Planned Action with Business Leaders</strong> <p>Share this report with executives or the management stakeholder (group) ultimately concerned with the effective use of corporate reports. Highlight key issue areas, proposed solutions, and get direction on goals and issues to address.</p></li>\n<li><strong>Create &amp; Execute a Business Leader Engagement Plan</strong> <p>Using the data in this report, work with your team to determine key stakeholders who require better reporting. Assign a manager for each relationship and plan out meeting objectives and frequency. Engage individual business leaders around their reporting needs. Use Individual Department Scorecards, Report Scorecards and Comments as a conversation starting point.</p></li>\n<li><strong>Execute Targeted Reporting & Analytics Improvements</strong><p>Pull together improvement initiatives from your team, executives and stakeholders. Create plans for undertaking them and have your team begin to execute them.</p></li>\n<li><strong>Repeat this Program as Needed</strong> <p>Complete this program annually or as desired to measure and communicate improvement, as well as receive ongoing feedback.</p></li>\n</ol>',
          datasets: {},
        },
      },
    },
    departmentScorecard: {
      slug: 'department_scorecard',
      id: 'department-scorecard',
      title: '<span>Department</span> Scorecard',
      heading: null,
      subHeading: null,
      description: null,
      sections: {
        dimensionsSection: {
          slug: 'dimensions_section',
          id: 'dimensions-section',
          title: 'Dimension',
          description: null,
          datasets: {
            processAverageAppScore: {
              slug: 'process_average_app_score',
              dataSource: {
                name: 'dqs_app_summary_average',
                resultType: 'table',
              },
              fields: {
                questionKeySlug: {
                  slug: 'question_key_slug',
                  dataType: 'string',
                  sourceField: 'question_key_slug',
                },
                dimensionQuestion: {
                  slug: 'dimension_question',
                  title: 'Question',
                  dataType: 'string',
                  sourceField: 'question_title',
                },
                scoreAvg: {
                  slug: 'score_avg',
                  titleSatisfaction: 'Degree of Satisfaction',
                  titleDepedency: 'Degree of Dependency',
                  dataType: 'decimal',
                  scale: 'fails_almost_highly_delights',
                  minValue: 0,
                  maxValue: 1,
                  precision: 0,
                  multiplier: 100,
                  sourceField: 'average_score',
                },
                satisfied: {
                  slug: 'satisfied',
                  title: 'Satisfied',
                  dataType: 'decimal',
                  scale: 'notsatisfied_neutral_delights',
                  minValue: 0,
                  maxValue: 1,
                  precision: 0,
                  multiplier: 100,
                  sourceField: 'satisfied',
                },
                neutral: {
                  slug: 'neutral',
                  title: 'Neutral',
                  dataType: 'decimal',
                  scale: 'unsatisfied_neutral_delights',
                  minValue: 0,
                  maxValue: 1,
                  precision: 0,
                  multiplier: 100,
                  sourceField: 'satisfied',
                },
                unSatisfied: {
                  slug: 'not_unsatisfied',
                  title: 'Not Satisfied',
                  dataType: 'decimal',
                  scale: 'unsatisfied_neutral_delights',
                  minValue: 0,
                  maxValue: 1,
                  precision: 0,
                  multiplier: 100,
                  sourceField: 'un_unsatisfied',
                },
              },
              data: [
                {
                  questionKeySlug: 'report_satisfaction',
                  slug: 'report_satisfaction',
                  degreeTitle: 'Degree of Satisfaction',
                  title: 'Overall Satisfaction',
                  secondaryTitle: 'Satisfaction',
                  order: 1,
                  description:
                    'How satisfied are you with the current suite of business reports and reporting tools?',
                  dimensionQuestion:
                    'How confident are you with the quality of the data found in this application?',
                  scoreAvg: 55,
                  scoreAvgRange: 'fails',
                  satisfied: 0.25,
                  neutral: 0.32,
                  unSatisfied: 0.45,
                },
                {
                  questionKeySlug: 'report_dependent',
                  slug: 'report_dependent',
                  degreeTitle: 'Degree of Dependency',
                  title: 'Overall Reporting Dependency',
                  secondaryTitle: 'Dependency',
                  order: 2,
                  description:
                    'To what degree do you and your team depend on reports and reporting tools to deliver business results?',
                  dimensionQuestion:
                    'How important is the data in this application to delivering business results?',
                  scoreAvg: 56,
                  scoreAvgRange: 'fails',
                  satisfied: 0.92,
                  neutral: 0.32,
                  unSatisfied: 0.45,
                },
                {
                  questionKeySlug: 'report_business_needs',
                  slug: 'report_business_needs',
                  degreeTitle: 'Degree of Satisfaction',
                  secondaryTitle: 'BusinessNeeds',
                  title: 'Meets Business Needs',
                  order: 3,
                  description:
                    'Report is useful and valuable for its desired business objective.',
                  dimensionQuestion:
                    'Clear. Data is easy to understand and interpret.',
                  scoreAvg: 42,
                  scoreAvgRange: 'fails',
                  satisfied: 0.25,
                  neutral: 0.32,
                  unSatisfied: 0.45,
                },
                {
                  questionKeySlug: 'report_usability',
                  slug: 'report_usability',
                  degreeTitle: 'Degree of Satisfaction',
                  secondaryTitle: 'BusinessNeeds',
                  title: 'Usability',
                  order: 4,
                  description:
                    'Report is clear and information presented is easy to consume.',
                  dimensionQuestion:
                    'Accurate. Data values are correct and accurately reflect reality.',
                  scoreAvg: 52,
                  scoreAvgRange: 'fails',
                  satisfied: 0.25,
                  neutral: 0.32,
                  unSatisfied: 0.45,
                },
                {
                  questionKeySlug: 'report_data_quality',
                  slug: 'report_data_quality',
                  degreeTitle: 'Degree of Satisfaction',
                  secondaryTitle: 'BusinessNeeds',
                  title: 'Data Quality',
                  order: 5,
                  description:
                    'The data in the report is accurate and is of high quality.',
                  dimensionQuestion:
                    'Current. Data is appropriately up-to-date, not outdated.',
                  scoreAvg: 55,
                  scoreAvgRange: 'fails',
                  satisfied: 0.25,
                  neutral: 0.32,
                  unSatisfied: 0.45,
                },
                {
                  questionKeySlug: 'report_customization',
                  slug: 'report_customization',
                  degreeTitle: 'Degree of Satisfaction',
                  secondaryTitle: 'BusinessNeeds',
                  title: 'Ease of Customization',
                  order: 6,
                  description:
                    'Report can be manipulated, segmented and customized as required.',
                  dimensionQuestion:
                    'Complete. All required data is captured, and no data is missing.',
                  scoreAvg: 72,
                  scoreAvgRange: 'highly',
                  satisfied: 0.25,
                  neutral: 0.32,
                  unSatisfied: 0.45,
                },
                {
                  questionKeySlug: 'report_sufficiency',
                  slug: 'report_sufficiency',
                  degreeTitle: 'Degree of Satisfaction',
                  secondaryTitle: 'BusinessNeeds',
                  title: 'Sufficiency',
                  order: 7,
                  description:
                    'All required data is in this report, not scattered across several.',
                  dimensionQuestion:
                    'Clean. Time-dependent activities (e.g. tasks, cases, jobs) are appropriately managed to maintain data cleanliness and quality.',
                  scoreAvg: 42,
                  scoreAvgRange: 'fails',
                  satisfied: 0.25,
                  neutral: 0.32,
                  unSatisfied: 0.45,
                },
                {
                  questionKeySlug: 'report_availability',
                  slug: 'report_availability',
                  degreeTitle: 'Degree of Satisfaction',
                  secondaryTitle: 'BusinessNeeds',
                  title: 'Portfolio Hygiene',
                  order: 8,
                  description:
                    'To what degree are you satisfied that the portfolio of reports you use adequately consolidated and cleansed so that it is easy to navigate and manage?',
                  dimensionQuestion:
                    'Available. Data and reports have appropriate security and access levels.',
                  scoreAvg: 44,
                  scoreAvgRange: 'fails',
                  satisfied: 0.25,
                  neutral: 0.32,
                  unSatisfied: 0.45,
                },
                {
                  questionKeySlug: 'report_clean',
                  slug: 'report_clean',
                  degreeTitle: 'Degree of Satisfaction',
                  secondaryTitle: 'BusinessNeeds',
                  title: 'Accessibility',
                  order: 9,
                  description:
                    'To what degree are you satisfied that you are able to find and access the data you need?',
                  dimensionQuestion:
                    'Easy to enter. Data entry is of high quality and validated appropriately.',
                  scoreAvg: 53,
                  scoreAvgRange: 'fails',
                  satisfied: 0.25,
                  neutral: 0.32,
                  unSatisfied: 0.45,
                },
                {
                  questionKeySlug: 'report_training',
                  slug: 'report_training',
                  degreeTitle: 'Degree of Satisfaction',
                  secondaryTitle: 'BusinessNeeds',
                  title: 'Training',
                  order: 10,
                  description:
                    'How satisfied are you that you and your team have the appropriate skills and training to make use of reports and reporting tools?',
                  dimensionQuestion:
                    'Unique. Each data element is captured in one spot, not duplicated across multiple fields.',
                  scoreAvg: 42,
                  scoreAvgRange: 'fails',
                  satisfied: 0.25,
                  neutral: 0.32,
                  unSatisfied: 0.45,
                },
                {
                  questionKeySlug: 'report_bi_advanced',
                  slug: 'report_bi_advanced',
                  degreeTitle: 'Degree of Satisfaction',
                  secondaryTitle: 'BusinessNeeds',
                  title: 'BI & Advanced Analytics',
                  order: 11,
                  description:
                    'How satisfied are you with your BI & advanced analytics tools (e.g. predictive analysis, statistical analysis and analyzing large volumes of unstructured data)?',
                  dimensionQuestion:
                    'Unique. Each data element is captured in one spot, not duplicated across multiple fields.',
                  scoreAvg: 42,
                  scoreAvgRange: 'fails',
                  satisfied: 0.25,
                  neutral: 0.32,
                  unSatisfied: 0.45,
                },
                {
                  questionKeySlug: 'report_self_serve_tools',
                  slug: 'report_self_serve_tools',
                  degreeTitle: 'Degree of Satisfaction',
                  secondaryTitle: 'BusinessNeeds',
                  title: 'Self Serve Tools',
                  order: 12,
                  description:
                    'How satisfied are you with your self-serve reporting tools (e.g. allow you to build your own custom reports)?',
                  dimensionQuestion:
                    'Unique. Each data element is captured in one spot, not duplicated across multiple fields.',
                  scoreAvg: 42,
                  scoreAvgRange: 'fails',
                  satisfied: 0.25,
                  neutral: 0.32,
                  unSatisfied: 0.45,
                },
              ],
            },
          },
        },
        infoSection: {
          slug: 'info_section',
          id: 'info-section',
          title: 'App Scorecard',
          description:
            '<p>Use the Department Scorecard to understand this department’s satisfaction around Corporate Reports. This includes overall Satisfaction and Dependency, Report Satisfaction across 5 dimensions (Meets Needs, Usability, Data Quality, Ability to Customize, Report Uniqueness), and Reporting Services Satisfaction across 5 dimensions (Self-Serve Tools, BI & Advanced Analytics Tools, Portfolio Hygiene, Report Access, and Training & Skills).</p><p>Averages contain scores for all reports evaluated by this department and their overall sentiments.</p><p>For each satisfaction breakdown:<p> <ol><li><strong>"Satisfied"</strong>: is the % of respondents who scored the area 8/10 or above.</li><li><strong>"Neutral"</strong>: is the % of respondents who scored the area 7/10.</li><li><strong>"Not Satisfied"</strong>: is the % of respondents who scored the area 6/10 or below.</li></ol>',
          datasets: {
            appDepartments: {
              slug: 'app_departments',
              dataSource: {
                name: 'application_departments',
                resultType: 'table',
              },
              fields: {
                departmentName: {
                  slug: 'department_name',
                  title: 'Departments Using',
                  dataType: 'string',
                  sourceField: 'department_name',
                },
              },
              data: [
                { departmentName: '03800856854646151' },
                { departmentName: '1573620525988555' },
                { departmentName: '27305070619352234' },
                { departmentName: '27305070619352234' },
                { departmentName: '27305070619352234' },
                { departmentName: '27305070619352234' },
                { departmentName: '27305070619352234' },
                { departmentName: '27305070619352234' },
                { departmentName: '27305070619352234' },
                { departmentName: '27305070619352234' },
                { departmentName: '27305070619352234' },
                { departmentName: '27305070619352234' },
                { departmentName: '27305070619352234' },
              ],
            },
          },
        },
      },
    },
    trainingPage: {
      slug: 'training',
      id: 'training',
      title: 'Training View',
      heading: 'Training View',
      subHeading: 'How to Use this Information',
      description:
        '<p>Often data and reporting issues can be resolved through training alone and require no technical or process-based solution.</p> <p>Providing training is something you can do right now to improve business satisfaction and help your stakeholders get the most out of data and reporting.</p><p>Use this information to book training sessions immediately. This is a quick win and there is no reason to wait.</p> <p>Use the attendee lists provided when booking the training. Read each comment to determine specific training needs, or if there are specific requests or concerns from stakeholders.</p> <p>If anything in the comments or attendee list seems out of the ordinary, follow up with respondents directly to understand their needs and resolve the issue.</p>',
      sections: {
        trainingRequestSection: {
          slug: 'training_request_section',
          id: 'training-request-section',
          title: 'Respondents Requesting Training',
          description: null,
          datasets: {
            trainingRequestsData: {
              slug: 'training_requests_data',
              dataSource: {
                name: 'training_request_comments',
                resultType: 'table',
              },
              fields: {
                firstName: {
                  slug: 'first_name',
                  dataType: 'string',
                  sourceField: 'first_name',
                },
                lastName: {
                  slug: 'last_name',
                  dataType: 'string',
                  sourceField: 'last_name',
                },
                employeeEmail: {
                  slug: 'employee_email',
                  dataType: 'string',
                  sourceField: 'email',
                },
                trainingRequestComment: {
                  slug: 'training_request_comment',
                  dataType: 'string',
                  sourceField: 'training_request_comment',
                },
                employeeDepartment: {
                  slug: 'employee_department',
                  dataType: 'string',
                  sourceField: 'department',
                },
              },
              data: [
                {
                  firstName: 'swsr',
                  lastName: 'rhphl',
                  employeeEmail: '06288801786690734@040648819467669295.com',
                  trainingRequestComment:
                    'Training training training training training training training training training training training training training training training training training training training training training training training training',
                  employeeDepartment: '03800856854646151',
                },
                {
                  firstName: 'jzbtuo',
                  lastName: 'eruoh',
                  employeeEmail: '9536711431310758@7207671275174641.com',
                  trainingRequestComment:
                    'training training training training training training training training training training training ',
                  employeeDepartment: '6347264751061552',
                },
                {
                  firstName: 'nhzyftp',
                  lastName: 'tfqeas',
                  employeeEmail: '5429960604271775@29767122464810414.com',
                  trainingRequestComment:
                    'Train train choo choo train train choo choo train train choo choo train train choo choo train train choo choo train train choo choo train train choo choo train train choo choo train train choo choo train train choo choo train train',
                  employeeDepartment: '47067206509084225',
                },
                {
                  firstName: 'pfqqhu',
                  lastName: 'hubywlx',
                  employeeEmail: '4685208700201957@6151427810638064.com',
                  trainingRequestComment:
                    'fgsdf gsf gsfh fgdh gdj ry ruy tiul oyil tyujetyhwrt hety het ety hwrt wtywrtu ru iryu ry jwr hwrt rt yety uryu iyio i r7u rh rth wryw y rteh dghn  g fgsdf gsf gsfh fgdh gdj ry ruy tiul oyil tyujetyhwrt hety het ety hwrt wtywrtu ru iryu ry jwr hwrt rt yety uryu iyio i r7u rh rth wryw y rteh dghn  g ',
                  employeeDepartment: '5406498508978343',
                },
                {
                  firstName: 'unvjbw',
                  lastName: 'iccxqjh',
                  employeeEmail: '4910511023172186@2896249769032655.com',
                  trainingRequestComment:
                    'training training training training training training training training training training training training training training training training training training training training training ',
                  employeeDepartment: '7473957319234437',
                },
                {
                  firstName: 'ymdhgr',
                  lastName: 'zolvalc',
                  employeeEmail: '1315784047635815@4942670193134331.com',
                  trainingRequestComment:
                    'Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in sceleris',
                  employeeDepartment: '4525950842465516',
                },
                {
                  firstName: 'ymdhgr',
                  lastName: 'zolvalc',
                  employeeEmail: '1315784047635815@4942670193134331.com',
                  trainingRequestComment:
                    'Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in sceleris',
                  employeeDepartment: '4525950842465516',
                },
                {
                  firstName: 'ymdhgr',
                  lastName: 'zolvalc',
                  employeeEmail: '1315784047635815@4942670193134331.com',
                  trainingRequestComment:
                    'Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in sceleris',
                  employeeDepartment: '4525950842465516',
                },
                {
                  firstName: 'ymdhgr',
                  lastName: 'zolvalc',
                  employeeEmail: '1315784047635815@4942670193134331.com',
                  trainingRequestComment:
                    'Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in sceleris',
                  employeeDepartment: '4525950842465516',
                },
                {
                  firstName: 'ymdhgr',
                  lastName: 'zolvalc',
                  employeeEmail: '1315784047635815@4942670193134331.com',
                  trainingRequestComment:
                    'Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in sceleris',
                  employeeDepartment: '4525950842465516',
                },
                {
                  firstName: 'ymdhgr',
                  lastName: 'zolvalc',
                  employeeEmail: '1315784047635815@4942670193134331.com',
                  trainingRequestComment:
                    'Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in sceleris',
                  employeeDepartment: '4525950842465516',
                },
                {
                  firstName: 'ymdhgr',
                  lastName: 'zolvalc',
                  employeeEmail: '1315784047635815@4942670193134331.com',
                  trainingRequestComment:
                    'Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in sceleris',
                  employeeDepartment: '4525950842465516',
                },
                {
                  firstName: 'ymdhgr',
                  lastName: 'zolvalc',
                  employeeEmail: '1315784047635815@4942670193134331.com',
                  trainingRequestComment:
                    'Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in sceleris',
                  employeeDepartment: '4525950842465516',
                },
                {
                  firstName: 'ymdhgr',
                  lastName: 'zolvalc',
                  employeeEmail: '1315784047635815@4942670193134331.com',
                  trainingRequestComment:
                    'Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in sceleris',
                  employeeDepartment: '4525950842465516',
                },
                {
                  firstName: 'ymdhgr',
                  lastName: 'zolvalc',
                  employeeEmail: '1315784047635815@4942670193134331.com',
                  trainingRequestComment:
                    'Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in sceleris',
                  employeeDepartment: '4525950842465516',
                },
                {
                  firstName: 'ymdhgr',
                  lastName: 'zolvalc',
                  employeeEmail: '1315784047635815@4942670193134331.com',
                  trainingRequestComment:
                    'Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in sceleris',
                  employeeDepartment: '4525950842465516',
                },
                {
                  firstName: 'ymdhgr',
                  lastName: 'zolvalc',
                  employeeEmail: '1315784047635815@4942670193134331.com',
                  trainingRequestComment:
                    'Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in scelerisque turpis. Phasellus et eleifend lorem, in sceleris',
                  employeeDepartment: '4525950842465516',
                },
              ],
            },
          },
        },
      },
    },
    newReportingNeeds: {
      slug: 'training',
      id: 'training',
      title: 'New Reporting Needs',
      heading: 'New Reporting Needs',
      subHeading: 'How to Use this Information',
      description:
        '<p>Use this section to address specific new reporting needs of respondents, centered around four areas: <strong>Self-Serve Reporting Tools</strong>, <strong>BI & Advanced Analytics Tools</strong>, <strong>New Reports</strong>, and <strong>Unmet Needs</strong>.</p> <p>Responses are organized by department and designed to be tackled one department at a time so you can focus on related issues and stakeholders.</p><p><strong>Self-Serve Tools + BI & Advanced Analytics Tools</strong><br />The people listed here have requested access to self-serve reporting tools as well as advanced analytics tools, and may have provided rationale for why they should have them. Whether you provide them or not is at your discretion: there may be a valid business reason for why they do not have access. Either way, it is critical that you follow up with these people to provide access or explain how else their needs can be met.</p><p><strong>New Reports</strong><br /> Respondents were asked what new reports they need. Read through this section to determine if there are themes or critical reports that do not exist. Follow up with key reports here but do not feel compelled to address every request.<p><strong>Unmet Needs</strong><br />Respondents here may have specific needs or may have used this question for general comments or complaints. Read through these comments to look for themes and respond to the needs of key stakeholders.</p>',
      sections: {
        reportSelfServeAccessRequestSection: {
          slug: 'report_self_serve_access_request_section',
          id: 'report-self-serve-access-request-section',
          title: 'Self-Serve',
          description: null,
          datasets: {
            reportSelfServeAccessRequestData: {
              slug: 'report_self_serve_access_request_data',
              dataSource: {
                name: 'report_self_serve_access_comments',
                resultType: 'table',
              },
              fields: {
                firstName: {
                  slug: 'first_name',
                  dataType: 'string',
                  sourceField: 'first_name',
                },
                lastName: {
                  slug: 'last_name',
                  dataType: 'string',
                  sourceField: 'last_name',
                },
                employeeEmail: {
                  slug: 'employee_email',
                  dataType: 'string',
                  sourceField: 'email',
                },
                reportSelfServeAccessComment: {
                  slug: 'report_self_serve_access_comment',
                  dataType: 'string',
                  sourceField: 'report_self_serve_access_comment',
                },
                employeeDepartment: {
                  slug: 'employee_department',
                  dataType: 'string',
                  sourceField: 'department',
                },
              },
              data: [
                {
                  firstName: 'Michael',
                  lastName: 'Brawn',
                  employeeEmail: 'mbrawn@infotech.com',
                  reportSelfServeAccessComment:
                    'Training training training training training training training training training',
                  reportName: 'RQS Report',
                },
                {
                  firstName: 'Bert',
                  lastName: 'McCracken',
                  employeeEmail: 'mmcracken@infotech.com',
                  reportSelfServeAccessComment:
                    'Training training training training training training training training training',
                  reportName: 'RQS Report',
                },
              ],
            },
          },
        },
        reportBiAdvancedAccessRequestSection: {
          slug: 'report_bi_advanced_access_request_section',
          id: 'report-bi-advanced-access-request-section',
          title: 'BI & Advanced Analytics Tools',
          description: null,
          datasets: {
            reportBiAdvancedAccessRequestData: {
              slug: 'report_bi_advanced_access_request_data',
              dataSource: {
                name: 'report_bi_advanced_access_comments',
                resultType: 'table',
              },
              fields: {
                firstName: {
                  slug: 'first_name',
                  dataType: 'string',
                  sourceField: 'first_name',
                },
                lastName: {
                  slug: 'last_name',
                  dataType: 'string',
                  sourceField: 'last_name',
                },
                employeeEmail: {
                  slug: 'employee_email',
                  dataType: 'string',
                  sourceField: 'email',
                },
                reportBiAdvancedAccessComment: {
                  slug: 'report_bi_advanced_access_comment',
                  dataType: 'string',
                  sourceField: 'report_bi_advanced_access_comment',
                },
                employeeDepartment: {
                  slug: 'employee_department',
                  dataType: 'string',
                  sourceField: 'department',
                },
              },
              data: [
                {
                  firstName: 'Jamie',
                  lastName: 'Strachan',
                  employeeEmail: 'jsrachan@infotech.com',
                  reportBiAdvancedAccessComment:
                    'Training training training training training training training training training',
                  reportName: 'RQS Report',
                },
                {
                  firstName: 'Liam',
                  lastName: 'Nickerson',
                  employeeEmail: 'lnickerson@infotech.com',
                  reportBiAdvancedAccessComment:
                    'Training training training training training training training training training',
                  reportName: 'RQS Report',
                },
              ],
            },
          },
        },
        reportTrainingRequestSection: {
          slug: 'report_training_request_section',
          id: 'report-training-request-section',
          title: 'New Reports',
          description: null,
          datasets: {
            reportTrainingRequestData: {
              slug: 'report_training_request_data',
              dataSource: {
                name: 'report_training_request_comments',
                resultType: 'table',
              },
              fields: {
                firstName: {
                  slug: 'first_name',
                  dataType: 'string',
                  sourceField: 'first_name',
                },
                lastName: {
                  slug: 'last_name',
                  dataType: 'string',
                  sourceField: 'last_name',
                },
                employeeEmail: {
                  slug: 'employee_email',
                  dataType: 'string',
                  sourceField: 'email',
                },
                reportTrainingRequestComment: {
                  slug: 'report_training_request_comment',
                  dataType: 'string',
                  sourceField: 'report_training_request_comment',
                },
                employeeDepartment: {
                  slug: 'employee_department',
                  dataType: 'string',
                  sourceField: 'department',
                },
              },
              data: [
                {
                  firstName: 'Sean',
                  lastName: 'Robinson',
                  employeeEmail: 'srobinson@infotech.com',
                  reportTrainingRequestComment:
                    'Training training training training training training training training training',
                  reportName: 'RQS Report',
                },
              ],
            },
          },
        },
        reportUnmetNeedsSection: {
          slug: 'report_unmet_needs_section',
          id: 'report-unmet-needs-section',
          title: 'Unmet Needs',
          description: null,
          datasets: {
            reportUnmetNeedsData: {
              slug: 'report_unmet_needs_data',
              dataSource: {
                name: 'report_unmet_needs_comment',
                resultType: 'table',
              },
              fields: {
                firstName: {
                  slug: 'first_name',
                  dataType: 'string',
                  sourceField: 'first_name',
                },
                lastName: {
                  slug: 'last_name',
                  dataType: 'string',
                  sourceField: 'last_name',
                },
                employeeEmail: {
                  slug: 'employee_email',
                  dataType: 'string',
                  sourceField: 'email',
                },
                reportUnmetNeedsComment: {
                  slug: 'report_unmet_needs_comment',
                  dataType: 'string',
                  sourceField: 'report_unmet_needs_comment',
                },
                employeeDepartment: {
                  slug: 'employee_department',
                  dataType: 'string',
                  sourceField: 'department',
                },
              },
              data: [
                {
                  firstName: 'Renato',
                  lastName: 'Dubbs',
                  employeeEmail: 'rdubravkic@infotech.com',
                  reportUnmetNeedsComment:
                    'Training training training training training training training training training',
                  reportName: 'RQS Report',
                },
              ],
            },
          },
        },
      },
    },
    reportScorecard: {
      slug: 'report_scorecard',
      id: 'report-scorecard',
      title: 'Report Scorecard',
      heading: null,
      subHeading: null,
      description: null,
      sections: {
        dimensionsSection: {
          slug: 'dimensions_section',
          id: 'dimensions-section',
          title: 'Dimension',
          description: null,
          datasets: {
            processChartsFrequency: {
              slug: 'report_scorecard_frequency_use',
              dataSource: {
                name: 'report_scorecard_frequency_use',
                resultType: 'table',
              },
              fields: {
                heading: {
                  title: 'Frequency of Use',
                  slug: 'title',
                  dataType: 'string',
                  sourceField: 'title',
                },
                chartPercentage: {
                  slug: 'chart_percentage',
                  dataType: 'decimal',
                  minValue: 0,
                  maxValue: 1,
                  precision: 0,
                  multiplier: 100,
                  sourceField: 'chart_percentage',
                },
              },
              data: [
                { name: 'Day', y: 22 },
                { name: 'Week', y: 43 },
                { name: 'Month', y: 13 },
                { name: 'Quartile', y: 19 },
                { name: 'Year', y: 11 },
              ],
            },
            processChartsUsecase: {
              slug: 'report_scorecard_use_cases',
              dataSource: {
                name: 'report_scorecard_use_cases',
                resultType: 'table',
              },
              fields: {
                heading: {
                  title: 'Use Cases',
                  slug: 'title',
                  dataType: 'string',
                  sourceField: 'title',
                },
                chartPercentage: {
                  slug: 'chart_percentage',
                  dataType: 'decimal',
                  minValue: 0,
                  maxValue: 1,
                  precision: 0,
                  multiplier: 100,
                  sourceField: 'chart_percentage',
                },
              },
              data: [
                { name: 'Decisions & Analysis', y: 100 },
                { name: 'Conpensation & Bonuses', y: 62 },
                { name: 'Managing People', y: 50 },
                { name: 'Other', y: 36 },
                { name: 'Reporting Business Results', y: 19 },
                { name: 'Managing Business Processes', y: 14 },
              ],
            },
            processAverageAppScore: {
              slug: 'process_average_app_score',
              dataSource: {
                name: 'dqs_app_summary_average',
                resultType: 'table',
              },
              fields: {
                questionKeySlug: {
                  slug: 'question_key_slug',
                  dataType: 'string',
                  sourceField: 'question_key_slug',
                },
                dimensionQuestion: {
                  slug: 'dimension_question',
                  title: 'Question',
                  dataType: 'string',
                  sourceField: 'question_title',
                },
                scoreAvg: {
                  slug: 'score_avg',
                  title: 'Degree of Satisfaction',
                  dataType: 'decimal',
                  scale: 'fails_almost_highly_delights',
                  minValue: 0,
                  maxValue: 1,
                  precision: 0,
                  multiplier: 100,
                  sourceField: 'average_score',
                },
                fails: {
                  slug: 'fails',
                  title: 'Not Satisfied',
                  dataType: 'decimal',
                  scale: 'fails_almost_delights',
                  minValue: 0,
                  maxValue: 1,
                  precision: 0,
                  multiplier: 100,
                  sourceField: 'fails',
                },
                almost: {
                  slug: 'almost',
                  title: 'Neutral',
                  dataType: 'decimal',
                  scale: 'fails_almost_delights',
                  minValue: 0,
                  maxValue: 1,
                  precision: 0,
                  multiplier: 100,
                  sourceField: 'almost',
                },
                delights: {
                  slug: 'delights',
                  title: 'Satisfied',
                  dataType: 'decimal',
                  scale: 'fails_almost_delights',
                  minValue: 0,
                  maxValue: 1,
                  precision: 0,
                  multiplier: 100,
                  sourceField: 'satisfies',
                },
              },
              data: [
                {
                  questionKeySlug: 'report_business_needs',
                  slug: 'report_business_needs',
                  title: 'Meets Business Requirements',
                  order: 1,
                  description:
                    'Report is useful and valuable for its desired business objective.',
                  dimensionQuestion:
                    'Report is useful and valuable for its desired business objective.',
                  scoreAvg: 54,
                  scoreAvgRange: 'fails',
                  fails: 0.55,
                  almost: 0.25,
                  delights: 0.45,
                  mainTitle: 'Degree of Satisfaction',
                },
                {
                  questionKeySlug: 'report_importance',
                  slug: 'report_importance',
                  title: 'Importance',
                  order: 2,
                  description:
                    'How important is this report to delivering business results?',
                  dimensionQuestion:
                    'How important is this report to delivering business results?',
                  scoreAvg: 64,
                  scoreAvgRange: 'almost',
                  fails: 0.3,
                  almost: 0.25,
                  delights: 0.45,
                  mainTitle: 'Degree of Importance',
                },
                {
                  questionKeySlug: 'report_data_quality',
                  slug: 'report_data_quality',
                  title: 'Data Quality',
                  order: 3,
                  description:
                    'The data in the report is accurate and is of high quality.',
                  dimensionQuestion:
                    'The data in the report is accurate and is of high quality.',
                  scoreAvg: 60,
                  scoreAvgRange: 'almost',
                  fails: 0.45,
                  almost: 0.25,
                  delights: 0.3,
                  mainTitle: 'Degree of Satisfaction',
                },
                {
                  questionKeySlug: 'report_usability',
                  slug: 'report_usability',
                  title: 'Usability',
                  order: 4,
                  description:
                    'Report is clear and information presented is easy to consume.',
                  dimensionQuestion:
                    'Report is clear and information presented is easy to consume.',
                  scoreAvg: 59,
                  scoreAvgRange: 'fails',
                  fails: 0.45,
                  almost: 0.1,
                  delights: 0.45,
                  mainTitle: 'Degree of Satisfaction',
                },
                {
                  questionKeySlug: 'report_ability_to_customize',
                  slug: 'report_ability_to_customize',
                  title: 'Ability to Customize',
                  order: 5,
                  description:
                    'Report can be manipulated, segmented and customized as required.',
                  dimensionQuestion:
                    'Report can be manipulated, segmented and customized as required.',
                  scoreAvg: 69,
                  scoreAvgRange: 'almost',
                  fails: 0.45,
                  almost: 0.1,
                  delights: 0.45,
                  mainTitle: 'Degree of Satisfaction',
                },
                {
                  questionKeySlug: 'report_sufficiency',
                  slug: 'report_sufficiency',
                  title: 'Sufficiency',
                  order: 6,
                  description:
                    'All required data is in this report, not scattered across several.',
                  dimensionQuestion:
                    'All required data is in this report, not scattered across several.',
                  scoreAvg: 54,
                  scoreAvgRange: 'fails',
                  fails: 0.45,
                  almost: 0.1,
                  delights: 0.45,
                  mainTitle: 'Degree of Satisfaction',
                },
              ],
            },
          },
        },
        infoSection: {
          slug: 'info_section',
          id: 'info-section',
          title: 'App Scorecard',
          description:
            '<p>Use this Report Scorecard to understand how satisfied respondents are with this report across 5 dimensions, its importance, how frequently it gets used and for what purpose (use case).</p><p>For each satisfaction breakdown:<p> <ol><li><strong>“Satisfied”</strong> is the % of respondents who scored the area 8/10 or above.</li><li><strong>“Neutral”</strong> is the % of respondents who scored the area 7/10.</li><li><strong>“Not Satisfied”</strong> is the % of respondents who scored the area 6/10 or below.</li></ol>',
          datasets: {
            fields: {
              reportRespondentsNumber: {
                slug: 'report_respondents_number',
                id: 'report-respondents-number',
                value: '49',
              },
            },
          },
        },
      },
    },
    comments: {
      slug: 'comments',
      id: 'comments',
      title: 'Comments',
      heading: 'Comments',
      subHeading: 'Year-over-year Sales Analysis',
      description:
        '<p>Use this sheet to understand key report issues as expressed by individual respondents. Look for recurring themes in the comments to identify high priority issues. Follow up with individual respondents as needed based on their role and/or the content of their response.</p>',
      sections: {
        respondentsCommentsSection: {
          slug: 'respondents_comments_section',
          id: 'respondents-comments-section',
          title: null,
          description: null,
          datasets: {
            employeeResponse: {
              slug: 'employee_response',
              dataSource: {
                name: 'dqs_individual_responses',
                resultType: 'table',
              },
              fields: {
                firstName: {
                  slug: 'first_name',
                  dataType: 'string',
                  sourceField: 'first_name',
                },
                lastName: {
                  slug: 'last_name',
                  dataType: 'string',
                  sourceField: 'last_name',
                },
                departmentName: {
                  slug: 'department_name',
                  dataType: 'string',
                  sourceField: 'department',
                },
                mostImportantElementsName1: {
                  slug: 'most_important_elements_name1',
                  dataType: 'string',
                  sourceField: 'most_important_data_name1',
                },
                mostImportantElementsName2: {
                  slug: 'most_important_elements_name2',
                  dataType: 'string',
                  sourceField: 'most_important_data_name2',
                },
                mostImportantElementsName3: {
                  slug: 'most_important_elements_name3',
                  dataType: 'string',
                  sourceField: 'most_important_data_name3',
                },
                mostImportantElementsDescription1: {
                  slug: 'most_important_elements_description1',
                  dataType: 'string',
                  sourceField: 'most_important_data_description1',
                },
                mostImportantElementsDescription2: {
                  slug: 'most_important_elements_description2',
                  dataType: 'string',
                  sourceField: 'most_important_data_description2',
                },
                mostImportantElementsDescription3: {
                  slug: 'most_important_elements_description3',
                  dataType: 'string',
                  sourceField: 'most_important_data_description3',
                },
                mostErrorProneElementsName1: {
                  slug: 'most_error_prone_elements_name1',
                  dataType: 'string',
                  sourceField: 'most_error_prone_data_name1',
                },
                mostErrorProneElementsName2: {
                  slug: 'most_error_prone_elements_name2',
                  dataType: 'string',
                  sourceField: 'most_error_prone_data_name2',
                },
                mostErrorProneElementsName3: {
                  slug: 'most_error_prone_elements_name3',
                  dataType: 'string',
                  sourceField: 'most_error_prone_data_name3',
                },
                mostErrorProneElementsDescription1: {
                  slug: 'most_error_prone_elements_description1',
                  dataType: 'string',
                  sourceField: 'most_error_prone_data_description1',
                },
                mostErrorProneElementsDescription2: {
                  slug: 'most_error_prone_elements_description2',
                  dataType: 'string',
                  sourceField: 'most_error_prone_data_description2',
                },
                mostErrorProneElementsDescription3: {
                  slug: 'most_error_prone_elements_description3',
                  dataType: 'string',
                  sourceField: 'most_error_prone_data_description3',
                },
                confidenceScore: {
                  slug: 'confidence_score',
                  title: 'Score',
                  dataType: 'decimal',
                  scale: 'fails_almost_highly_delights2',
                  minValue: 1,
                  maxValue: 10,
                  precision: 0,
                  multiplier: 1,
                  sourceField: 'application_confident_score',
                },
                confidenceComments: {
                  slug: 'confidence_comments',
                  title: 'Comments',
                  dataType: 'string',
                  sourceField: 'confidence_comments',
                },
                importanceScore: {
                  slug: 'importance_score',
                  title: 'Score',
                  dataType: 'decimal',
                  scale: 'fails_almost_highly_delights2',
                  minValue: 1,
                  maxValue: 10,
                  precision: 0,
                  multiplier: 1,
                  sourceField: 'application_important_score',
                },
                clarityScore: {
                  slug: 'clarity_score',
                  title: 'Score',
                  dataType: 'decimal',
                  scale: 'fails_almost_highly_delights2',
                  minValue: 1,
                  maxValue: 10,
                  precision: 0,
                  multiplier: 1,
                  sourceField: 'application_clear_score',
                },
                clarityComments: {
                  slug: 'clarity_comments',
                  title: 'Comments',
                  dataType: 'string',
                  sourceField: 'clarity_comments',
                },
                accuracyComments: {
                  slug: 'accuracy_comments',
                  title: 'Accuracy',
                  dataType: 'string',
                  sourceField: 'accuracy_comments',
                },
                accuracyScore: {
                  slug: 'accuracy_score',
                  title: 'Score',
                  dataType: 'decimal',
                  scale: 'fails_almost_highly_delights2',
                  minValue: 1,
                  maxValue: 10,
                  precision: 0,
                  multiplier: 1,
                  sourceField: 'application_accurate_score',
                },
                currencyScore: {
                  slug: 'currency_score',
                  title: 'Score',
                  dataType: 'decimal',
                  scale: 'fails_almost_highly_delights2',
                  minValue: 1,
                  maxValue: 10,
                  precision: 0,
                  multiplier: 1,
                  sourceField: 'application_current_score',
                },
                currencyComments: {
                  slug: 'currency_comments',
                  title: 'Comments',
                  dataType: 'string',
                  sourceField: 'currency_comments',
                },
                completenessScore: {
                  slug: 'completeness_score',
                  title: 'Score',
                  dataType: 'decimal',
                  scale: 'fails_almost_highly_delights2',
                  minValue: 1,
                  maxValue: 10,
                  precision: 0,
                  multiplier: 1,
                  sourceField: 'application_complete_score',
                },
                completenessComments: {
                  slug: 'completeness_comments',
                  title: 'Comments',
                  dataType: 'string',
                  sourceField: 'completeness_comments',
                },
                hygieneScore: {
                  slug: 'hygiene_score',
                  title: 'Score',
                  dataType: 'decimal',
                  scale: 'fails_almost_highly_delights2',
                  minValue: 1,
                  maxValue: 10,
                  precision: 0,
                  multiplier: 1,
                  sourceField: 'application_clean_score',
                },
                hygieneComments: {
                  slug: 'hygiene_comments',
                  title: 'Comments',
                  dataType: 'string',
                  sourceField: 'hygiene_comments',
                },
                availabilityScore: {
                  slug: 'availability_score',
                  title: 'Score',
                  dataType: 'decimal',
                  scale: 'fails_almost_highly_delights2',
                  minValue: 1,
                  maxValue: 10,
                  precision: 0,
                  multiplier: 1,
                  sourceField: 'application_availabilite_score',
                },
                availabilityComments: {
                  slug: 'availability_comments',
                  title: 'Comments',
                  dataType: 'string',
                  sourceField: 'availability_comments',
                },
                entryQualityScore: {
                  slug: 'entry_quality_score',
                  title: 'Score',
                  dataType: 'decimal',
                  scale: 'fails_almost_highly_delights2',
                  minValue: 1,
                  maxValue: 10,
                  precision: 0,
                  multiplier: 1,
                  sourceField: 'application_entry_score',
                },
                entryQualityComments: {
                  slug: 'entry_quality_comments',
                  title: 'Comments',
                  dataType: 'string',
                  sourceField: 'entry_quality_comments',
                },
                uniquenessScore: {
                  slug: 'uniqueness_score',
                  title: 'Score',
                  dataType: 'decimal',
                  scale: 'fails_almost_highly_delights2',
                  minValue: 1,
                  maxValue: 10,
                  precision: 0,
                  multiplier: 1,
                  sourceField: 'application_unique_score',
                },
                uniquenessComments: {
                  slug: 'uniqueness_comments',
                  title: 'Comments',
                  dataType: 'string',
                  sourceField: 'uniqueness_comments',
                },
                unmetNeedsHeader: {
                  slug: 'unmet_needs_header',
                  title: 'Unmet Needs',
                  dataType: 'string',
                  sourceField: 'unmet_needs',
                },
              },
              data: [
                {
                  firstName: 'Alejandro',
                  lastName: 'Gonzales',
                  departmentName: 'Design Support',
                  email: 'agonzales@infotech.com',
                  useCasesContent:
                    'Managing People, Compensation & Bonuses, Decisions & Analysis, Reporting Business Results, Managing Business Processes, Other',
                  improvementsNeededContent:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis odio nisl. Pellentesque porttitor, libero vel luctus gravida, tellus massa aliquam velit, non faucibus urna metus nec leo. Quisque consequat ornare quam a mattis. In faucibus egestas mi non luctus.<br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis odio nisl. Pellentesque porttitor, libero vel luctus gravida, tellus massa aliquam velit, non faucibus urna metus nec leo. Quisque consequat ornare quam a mattis. In faucibus egestas mi non luctus.',
                  overlapContent:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis odio nisl. Pellentesque porttitor, libero vel luctus gravida, tellus massa aliquam velit, non faucibus urna metus nec leo. Quisque consequat ornare quam a mattis. In faucibus egestas mi non luctus.',
                  importanceScore: 4,
                  importanceScoreRange: 'fails',
                  needsScore: 9,
                  needsScoreRange: 'delights',
                  useScore: 8,
                  useScoreRange: 'delights',
                  qualityScore: 7,
                  qualityScoreRange: 'highly',
                  customScore: 6,
                  customScoreRange: 'almost',
                  relevanceScore: 9,
                  relevanceScoreRange: 'delights',
                  unmetNeedsHeader:
                    'Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment.',
                },
                {
                  firstName: 'Liam',
                  lastName: 'Nickerson',
                  departmentName: 'Design Support',
                  email: 'lnickerson@infotech.com',
                  useCasesContent:
                    'Managing People, Compensation & Bonuses, Decisions & Analysis, Reporting Business Results, Managing Business Processes, Other',
                  improvementsNeededContent:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis odio nisl. Pellentesque porttitor, libero vel luctus gravida, tellus massa aliquam velit, non faucibus urna metus nec leo. Quisque consequat ornare quam a mattis. In faucibus egestas mi non luctus.<br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis odio nisl. Pellentesque porttitor, libero vel luctus gravida, tellus massa aliquam velit, non faucibus urna metus nec leo. Quisque consequat ornare quam a mattis. In faucibus egestas mi non luctus.',
                  overlapContent:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis odio nisl. Pellentesque porttitor, libero vel luctus gravida, tellus massa aliquam velit, non faucibus urna metus nec leo. Quisque consequat ornare quam a mattis. In faucibus egestas mi non luctus.',
                  importanceScore: 4,
                  importanceScoreRange: 'fails',
                  needsScore: 9,
                  needsScoreRange: 'delights',
                  useScore: 8,
                  useScoreRange: 'delights',
                  qualityScore: 7,
                  qualityScoreRange: 'highly',
                  customScore: 6,
                  customScoreRange: 'almost',
                  relevanceScore: 9,
                  relevanceScoreRange: 'delights',
                  unmetNeedsHeader:
                    'Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment.',
                },
                {
                  firstName: 'Jamie',
                  lastName: 'Strachan',
                  departmentName: 'Development - Purple Team',
                  email: 'jstrachan@infotech.com',
                  useCasesContent:
                    'Managing People, Compensation & Bonuses, Decisions & Analysis, Reporting Business Results, Managing Business Processes, Other',
                  improvementsNeededContent:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis odio nisl. Pellentesque porttitor, libero vel luctus gravida, tellus massa aliquam velit, non faucibus urna metus nec leo. Quisque consequat ornare quam a mattis. In faucibus egestas mi non luctus.<br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis odio nisl. Pellentesque porttitor, libero vel luctus gravida, tellus massa aliquam velit, non faucibus urna metus nec leo. Quisque consequat ornare quam a mattis. In faucibus egestas mi non luctus.',
                  overlapContent:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis odio nisl. Pellentesque porttitor, libero vel luctus gravida, tellus massa aliquam velit, non faucibus urna metus nec leo. Quisque consequat ornare quam a mattis. In faucibus egestas mi non luctus.',
                  importanceScore: 4,
                  importanceScoreRange: 'fails',
                  needsScore: 9,
                  needsScoreRange: 'delights',
                  useScore: 8,
                  useScoreRange: 'delights',
                  qualityScore: 7,
                  qualityScoreRange: 'highly',
                  customScore: 6,
                  customScoreRange: 'almost',
                  relevanceScore: 9,
                  relevanceScoreRange: 'delights',
                  unmetNeedsHeader:
                    'Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment Comment.',
                },
                {
                  firstName: 'Burt',
                  lastName: 'McCutchen',
                  departmentName: 'Aqua Team',
                  email: 'bmccutchen@infotech.com',
                  useCasesContent:
                    'Managing People, Compensation & Bonuses, Decisions & Analysis, Reporting Business Results, Managing Business Processes, Other',
                  improvementsNeededContent:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis odio nisl. Pellentesque porttitor, libero vel luctus gravida, tellus massa aliquam velit, non faucibus urna metus nec leo. Quisque consequat ornare quam a mattis. In faucibus egestas mi non luctus.<br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis odio nisl. Pellentesque porttitor, libero vel luctus gravida, tellus massa aliquam velit, non faucibus urna metus nec leo. Quisque consequat ornare quam a mattis. In faucibus egestas mi non luctus.',
                  overlapContent:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis odio nisl. Pellentesque porttitor, libero vel luctus gravida, tellus massa aliquam velit, non faucibus urna metus nec leo. Quisque consequat ornare quam a mattis. In faucibus egestas mi non luctus.',
                  importanceScore: 4,
                  importanceScoreRange: 'fails',
                  needsScore: 9,
                  needsScoreRange: 'delights',
                  useScore: 8,
                  useScoreRange: 'delights',
                  qualityScore: 7,
                  qualityScoreRange: 'highly',
                  customScore: 6,
                  customScoreRange: 'almost',
                  relevanceScore: 9,
                  relevanceScoreRange: 'delights',
                  unmetNeedsHeader:
                    'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia voluptas sit ',
                },
              ],
            },
          },
        },
      },
    },
  },
  dictionary: {
    employeeResponseHeader: {
      useCases: {
        slug: 'use_cases',
        title: 'Use Cases',
        titleShort: 'Use Cases',
      },
      improvementsNeeded: {
        slug: 'improvements_needed',
        title: 'Improvements Needed',
        titleShort: 'Improvements Needed',
      },
      overlap: { slug: 'overlap', title: 'Overlap', titleShort: 'Overlap' },
    },
    questionKey: {
      reportImportant: {
        slug: 'report_important',
        title: 'Importance',
        order: 2,
      },
      reportNeeds: {
        slug: 'report_meets_business_needs',
        title: 'Meets Business Needs',
        order: 3,
      },
      reportUse: { slug: 'report_usability', title: 'Usability', order: 4 },
      reportQuality: {
        slug: 'report_data_quality',
        title: 'Data Quality',
        order: 5,
      },
      reportCustom: {
        slug: 'report_ability_to_customize',
        title: 'Ability to Customize',
        order: 6,
      },
      reportRelevance: {
        slug: 'report_sufficiency',
        title: 'Sufficiency',
        order: 7,
      },
    },
  },
  skipTransform: true,
  includedPages: [
    'cover-page',
    'table-of-contents',
    'report-scorecard',
    'department-scorecard',
    'department-summary-page',
    'training',
    'new-reporting-needs',
    'comments',
  ],
  cobranding: {},
};

export default data;
