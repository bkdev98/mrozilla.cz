// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';

// Components
import { Link } from '../../../components/Navigation/Links';

// =============================================================================
// Content
// =============================================================================

/* eslint-disable max-len */
const legal = {
  top: {
    title:    'legal',
    subtitle: 'the lawyer stuff because we have to in this world.',
    text:     (
      <span>
        Copyright (c) {new Date().getFullYear()}{' '}
        <Link to="mailto:jan@mrozilla.cz">Jan Hrubý</Link>, Obere Amtshausgasse
        20-24/38, 1050 Wien, AUSTRIA ("we", "us", "our"). The code of this
        website is licensed under the{' '}
        <Link to="https://github.com/mrozilla/mrozilla.cz/blob/master/LICENSE">
          MIT License
        </Link>. The website uses {' '}
        <Link to="https://github.com/mrozilla/mrozilla.cz/blob/master/package.json">
          open-source software
        </Link>.
      </span>
    ),
  },
  text: [
    'Terms of service',
    [
      'Terms:',
      [
        <span>
          By accessing the website at{' '}
          <Link to="https://mrozilla.cz">https://mrozilla.cz</Link> and its
          associated services (the &quot;Website&quot;), you are agreeing to be
          bound by these terms of service, all applicable laws and regulations,
          and agree that you are responsible for compliance with any applicable
          local laws. If you do not agree with any of these terms, you are
          prohibited from using or accessing this site. The materials contained
          in this Website are protected by applicable copyright and trademark
          law.
        </span>,
      ],
      'Use License:',
      [
        'Permission is granted to temporarily download one copy of the materials (information or software) on the Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:',
        [
          'modify or copy the materials;',
          'use the materials for any commercial purpose, or for any public display (commercial or non-commercial);',
          'remove any copyright or other proprietary notations from the materials;',
          'or transfer the materials to another person or "mirror" the materials on any other server.',
        ],
        'This license shall automatically terminate if you violate any of these restrictions and may be terminated by me at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.',
      ],
      'Disclaimer',
      [
        'The materials on the Website are provided on an "asis" basis. We make no warranties, expressed or implied, andhereby disclaim and negate all other warranties including,without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.',
        'Further, we do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on the Website or otherwise relating to such materials or on any sites linked to this site.',
      ],
      'Limitations',
      [
        'In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the Website, even if we or a our authorised representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.',
      ],
      'Accuracy of materials',
      [
        'The materials appearing on the Website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its Website are accurate, complete or current. We may make changes to the materials contained on its Website at any time without notice. However, We do not make any commitment to update the materials.',
      ],
      'Links',
      [
        "We have not reviewed all of the sites linked to this Website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us. Use of any such linked Website is at the user's own risk.",
      ],
      'Modifications',
      [
        'We may revise these terms of service for the Website at any time without notice. By using this Website you are agreeing to be bound by the then current version of these terms of service.',
      ],
      'Governing law',
      [
        'These terms and conditions are governed by and construed in accordance with the laws of Austria and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.',
      ],
    ],
    'Privacy policy',
    [
      'This privacy policy explains how we use any personal information we collect about you when you use this Website.',
      'What information do we collect about you?',
      [
        'This Website uses Google Analytics, a web analytics service provided by Google, Inc. ("Google"). The information about your use of the Website (including your IP address) will be transmitted to and stored by Google on servers in the United States. Google will use this information for the purpose of evaluating your use of the Website, compiling reports on website activity for us and providing other services relating to website activity and internet usage. Google may also transfer this information to third parties where required to do so by law, or where such third parties process the information on Google&apos;s behalf. Google will not associate your IP address with any other data held by Google.',
        <span>
          This Website uses Facebook Messenger, a platform provided by Facebook,
          Inc. (&quot;Facebook&quot;). The Website may ask for some Facebook
          permissions allowing it to perform actions with your Facebook account
          and to retrieve information, including personal data, from it. For
          more information about the following permissions, refer to the{' '}
          <Link to="https://developers.facebook.com/docs/authentication/permissions/">
            Facebook permissions documentation
          </Link>{' '}
          and to the{' '}
          <Link to="https://www.facebook.com/about/privacy/">
            Facebook privacy policy
          </Link>. The permissions asked are the following:
        </span>,
        [
          'Basic information',
          [
            'By default, this includes certain User’s Data such as id, name, picture, gender, and their locale. Certain connections of the User, such as the Friends, are also available. If the User has made more of their Data public, more information will be available.',
          ],
        ],
        'Website usage information is collected using cookies.',
        [
          'Cookies are text files placed on your computer to collect standard internet log information and visitor behaviour information. This information is used to track visitor use of the website and to compile statistical reports on website activity.',
          <span>
            For further information visit{' '}
            <Link to="http://www.aboutcookies.org">
              www.aboutcookies.org
            </Link>{' '}
            or
            <Link to="http://www.allaboutcookies.org">
              www.allaboutcookies.org
            </Link>.
          </span>,
          'You can set your browser not to accept cookies and the above websites tell you how to remove cookies from your browser. However in a few cases some of the Website features may not function as a result.',
        ],
      ],
      'How will we use the information about you?',
      [
        'We use your information collected from the Website to personalise your repeated visits to the Website.',
        'We will not share your information for marketing purposes with any third-party organisation.',
      ],
      'Access to your information and correction',
      [
        'You have the right to request a copy of the information that we hold about you. If you would like a copy of some or all of your personal information, please email or write to us at the following address. We may make a small charge for this service.',
        'We want to make sure that your personal information is accurate and up to date. You may ask us to correct or remove information you think is inaccurate.',
      ],
      'Other websites',
      [
        'This Website contains links to other websites. This privacy policy only applies to this Website so when you link to other websites you should read their own privacy policies.',
      ],
      'Changes to our privacy policy',
      [
        'We keep our privacy policy under regular review and we will place any updates on this web page.',
      ],
      'How to contact us',
      [
        <span>
          Please <Link to="mailto:jan@mrozilla.cz">send us an email</Link> if
          you have any questions about our privacy policy or information we hold
          about you.
        </span>,
      ],
    ],
  ],
};
/* eslint-enable max-len */

export default legal;
