import { Footer, Header } from "@/sections";
import { useTitle } from "@/utils/useTitle";
import styles from "./privacyTerms.module.css";

import CODAMAP from "@/assets/210825-CODA-MAP-Policy-V1.1.pdf";
import CODADPA from "@/assets/CODA-DPA.pdf";
import CODASLA from "@/assets/CODA-SLA.pdf";
import CODASPAR from "@/assets/CODA-SPARA-v1.4.pdf";
import CODATOS from "@/assets/CODA-TOS-v1.2.pdf";

export function Terms() {
  useTitle("Terms");
  return (
    <>
      <Header isLeftAligned type="title" title="Terms of Service" />
      <section className={styles.container}>
        <div
          style={{
            paddingBottom: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "20px",
            borderRadius: "20px",
            marginBottom: "20px",
            border: "2px solid rgba(255,255,255,0.1)",
          }}
        >
          <a href={CODATOS}>
            CODA Intelligence MSP Terms of Service v1.2 (TOS)
          </a>
          <a href={CODADPA}>
            CODA Intelligence &#8211; Data Processing Addendum (DPA)
          </a>
          <a href={CODASLA}>
            Schedule B &#8211; Service Level Agreement for Services & Software
            (SLA)
          </a>
          <a href={CODASPAR}>
            CODA Footprint Security, Privacy and Architecture Reference Securing
            and Protecting the Data within the Footprint Ecosystem (SPAR)
          </a>
          <a href={CODAMAP}>CODA MAP Policy (MAP)</a>
        </div>
        <p>
          CODA Intelligence MSP Terms of Service v1.2
          <br />
          <em>
            <strong>Effective Date 03rd of January 2021</strong>
          </em>
        </p>
        <p>
          CODA Intelligence (US) Inc. (“CODA”) is willing to provide certain
          services to you as the company or other legal entity (“You” or “Your”
          or “Customer”) that has entered into an Order Form (as defined below)
          that incorporates these terms and conditions (the “Terms of Service”,
          and together with the Order Form and any SOWs (as defined below), the
          “Agreement”).
          <br />
          By using the Service (as defined below) or signing an Order Form, you
          agree to the terms and conditions of the Agreement.
          <br />
          The parties shall be referred to individually as a Party and
          collectively as the Parties.
        </p>
        <p>
          <strong>1. DEFINITIONS</strong>
          <br />
          1.1 Affiliate means any entity that is directly or indirectly
          controlled by a Party. For purposes of this definition “control” means
          the direct possession of a majority of the outstanding voting
          securities of an entity.
          <br />
          1.2 Authorized User means a person who is authorized by Customer to
          access and use the Service.
          <br />
          1.3 Customer Data means all data made available by Customer to CODA
          for use in connection with the Service.
          <br />
          1.4 Documentation means the documentation for the Service generally
          supplied by CODA to assist its customers in their use of the Service,
          including user and system administrator guides, manuals and the
          Service functionality specifications.
          <br />
          1.5 Hosting Terms and Conditions means the terms and conditions of the
          third party hosting service provider used by CODA to host Customer
          Data, as set out in Schedule B (Service Level Agreement for Services
          &amp; Software).
          <br />
          1.6 Open Source Software means any open source, copyleft or community
          source code (including any libraries or code, software, technologies
          or other materials that are licensed or distributed under any General
          Public License, Lesser General Public License or similar license
          arrangement or other distribution model described by the Open Source
          Initiative at www.opensource.org).
          <br />
          1.7 Order Form means CODA’s order form or other ordering document
          which identifies the specific Service ordered, the Volume Limitations,
          and the price agreed upon by the parties. The Order Form is an
          integral part of the Agreement and shall be substantially in the form
          set out in Schedule A (Template Order Form).
          <br />
          1.8 Service means the subscription service identified in the Order
          Form.
          <br />
          1.9 SLA (or Service Level Agreement) sets out CODA’s process for
          responding to customer support requests within predefined parameters
          and sets out the applicable Service uptime rates. The SLA (accessible
          at https://www.codaintelligence.com/terms/) is incorporated herein by
          reference and is an integral part of the Agreement.
          <br />
          1.10 Subscription Term means the term identified in the Order Form
          during which Customer has a subscription to the Service and includes
          the Initial Term and any Renewal Terms (each as identified in the
          Order Form).
          <br />
          1.11 Tax means any applicable tax chargeable on the sale of goods or
          supply of services. 1.12 Volume Limitations means the capacity
          indicated in the Order Form, including, as
          <br />
          applicable, unique assets, applications, number of scans, gigabytes,
          or workflows.
        </p>
        <p>
          <strong>2. SOFTWARE</strong>
          <br />
          2.1 Access to Service.
          <br />
          (a) During the Subscription Term, and subject to the terms and
          conditions of this Agreement (including the Hosting Terms and
          Conditions), CODA grants Customer a non-exclusive, non-transferable,
          non-sublicensable (other than in accordance with Section 2.1(b) below)
          right to use and access the Service: (i) solely for Customer’s
          business purposes; (ii) within the Volume Limitations; and (iii) as
          described in the Agreement, and to white-label the Service under
          Customer’s own name and branding.
          <br />
          (b) Customer may grant Authorized Users a non-exclusive,
          non-transferable, non-sublicensable right to access and use the
          Service: (i) solely for the Authorized Users’ business purposes; (ii)
          within the Volume Limitations; (iii) as described in the Agreement;
          and provided that Customer:
          <br />
          (A) does not make or give any representations, warranties or other
          promises concerning the Service except as set out in the Agreement or
          as otherwise agreed by the Parties in writing from time to time;
          <br />
          (B) ensures that all Authorized Users are aware of the terms of the
          Agreement (including the Hosting Terms and Conditions) and act in
          compliance with them;
          <br />
          (C) enters into a written agreement with each Authorized User for the
          Authorized User’s access to and use of the Service, and ensures that
          the written terms protect CODA and its proprietary rights in the
          Service to the same extent as set out in these Terms of Service,
          including, in particular, Sections 2.2 and 8 (and Customer will take
          reasonable steps to enforce such terms at CODA’s request) and which
          prohibit the Authorized User from reselling or otherwise distributing
          the Service; and
          <br />
          (D) ensures that CODA is not liable to the Authorized Users in any
          way.
          <br />
          (c) If the Service is used in excess of the Volume Limitations,
          Customer shall be liable for, and CODA reserves the right to invoice
          Customer for, the fees for such excess usage at CODA’s then current
          list rates, or as otherwise set forth in the Order Form,
          notwithstanding the limitation on liability in Section 6.2 of this
          Agreement.
          <br />
          2.2 Restrictions. Customer will not, and will not permit or authorize
          third parties (including Authorized Users) to: (i) reproduce, modify,
          translate, enhance, decompile, disassemble, reverse engineer, create
          derivative works of the Service, or merge the Service into another
          program; (ii) resell, rent, lease, or sublicense the Service or access
          to it (except to the extent permitted in accordance with Section
          2.1(b) above) including use of the Service for timesharing or service
          bureau purposes; (iii) circumvent or disable any security or
          technological features or measures in the Service; nor (iv) access the
          Service in order to build a competitive product or service, for
          competitive analysis, or to copy any ideas, features, functions or
          graphics of the Service.
          <br />
          2.3 Logins and other access to the Service. Where CODA issues Customer
          with login credentials to access and use the Service and/or the
          Documentation, Customer shall, and shall procure that all Authorized
          Users will, protect such credentials against misuse. Customer is
          responsible for all activities conducted under its logins, and for its
          employees’ and Authorized Users’ compliance with the Agreement. If
          Customer identifies a vulnerability in the Service or any misuse of
          its login credentials, Customer must immediately notify CODA and
          provide all information and analysis regarding the vulnerability
          through the CODA contact form, accessible at
          www.codaintelligence.com/contact. Customer shall be solely responsible
          for ensuring that its employees and Authorized Users have an Internet
          connection and suitable software and hardware equipment or
          configuration as required to access and use the Service.
          <br />
          2.4 Responsibility for Authorized Users. Customer shall be responsible
          for any acts and omissions in connection with the use of the Service
          by its employees and Authorized Users. Customer shall indemnify and
          defend CODA, and CODA’s agents and contractors, from and against any
          and all losses, damages, claims, liabilities or expenses (including
          reasonable lawyer&#8217;s fees) arising out of a claim brought by an
          Authorized User or any other third party relating to any Authorized
          User’s use of the Service (except to the extent caused by CODA&#8217;s
          negligence). Customer shall immediately end any Authorized User’s
          right to access and use the Service if the Authorized User ceases its
          employment or other relationship with Customer.
          <br />
          2.5 Customer Systems. Customer represents and warrants that it has the
          appropriate authorizations from the owner of the networks, systems, IP
          addresses, assets, and/or hardware on which it deploys the Service, or
          which it targets, scans, monitors, or tests with the Service.
          <br />
          2.6 Changes to Services. CODA may, in its sole discretion, make any
          changes to the Service that it deems necessary or useful, including to
          (i) maintain or enhance (a) the quality or delivery of CODA’s products
          or services to its customers, (b) the competitive strength of, or
          market for, CODA’s products or services, (c) such Platform’s cost
          efficiency or performance, or (ii) to comply with applicable law; and,
          in each case, no warranty, representation or other commitment is given
          in relation to the continuity of any functionality of the Service.
          <br />
          2.7 Customer Compliance. Customer shall use, and will ensure that all
          Authorized Users use, the Service in full compliance with this
          Agreement and all applicable laws and regulations. Customer represents
          and warrants that it (i) has accessed and reviewed any terms of use or
          other policies relating to the Services provided by CODA, (ii)
          understands the requirements thereof, and (iii) shall comply
          therewith. Without liability or prejudice to CODA’s other rights under
          the Agreement, CODA may suspend Customer’s rights of access to and use
          of the Services at any time and without notice if CODA believes that
          Customer is in violation of the Agreement. Although CODA has no
          obligation to monitor Customer’s or any Authorized User’s use of the
          Services, CODA may do so (including for the purposes of ensuring the
          quality of, and improving, the Service, and verifying Customer’s
          compliance with the Agreement) and may prohibit any use it believes
          may be (or alleged to be) in violation of the foregoing.
          <br />
          2.8 Cooperation. Customer shall provide all cooperation and assistance
          as CODA may reasonably request to enable CODA to exercise its rights
          and perform its obligations under, and in connection with, the
          Agreement, including providing CODA with remote access to Customer’s
          premises and its information technology infrastructure as is necessary
          for CODA to perform the Services in accordance with this Agreement.
          <br />
          2.9 Restrictions on Export. Customer understands that the Service is
          or may be subject to export control laws and regulations. Customer may
          not remove or export from the United States or allow the export or
          re-export of the Service or any technical or other data provided in
          connection therewith or any underlying information or technology, or
          (in each case) any direct product thereof, in violation of any
          restrictions, laws or regulations of any United States or foreign
          agency or authority.
        </p>
        <p>
          <strong>3. FEES AND PAYMENT TERMS</strong>
          <br />
          3.1 If Customer wishes to become a CODA authorized reseller,Customer
          ca ndo so by signing a separate dedicated reseller agreement.
          <br />
          3.2 Fees. CODA will invoice Customer,and Customer shall pay, the fees
          set forth in the Order Form (or such other fees as notified by CODA to
          Customer from time to time in accordance with Section 3.13 below).
          <br />
          3.3 If usage of the Services exceeds the amounts or limits set out in
          an Order, CODA will invoice Customer, and Customer must pay, for such
          excess usage, based on CODA’s rates set forth in the Order Form
          through the end of the then-current Initial Term or Renewal Term (as
          applicable). Except as specifically provided in these Terms of Service
          or in the Order Form, (a) fees are based on subscriptions purchased
          and not actual usage; (b) all payment obligations are non-cancellable,
          and fees paid non-refundable; and (c) quantities purchased cannot be
          decreased during the Subscription Term. For example, if usage exceeds
          the limits during month 4 of a 12-month order, CODA will invoice
          Customer for 9 months of the excess usage amount and the remaining 9
          months of Service will increase to include the current amount plus the
          excess.
          <br />
          3.4 Upgrades or Expansions. For any Service upgrades or expansions
          during the Subscription Term, Customer must pay the additional pro
          rata Service fee for the upgrade or expansion through the end of the
          then-current Initial Term or Renewal Term (as applicable). For the
          following Renewal Term, the upgraded or expanded Service will be
          invoiced along with the originally-ordered Service and treated in all
          respects as though it had been part of the original Order Form. A new
          or amended Order Form is required for each upgrade or expansion.
          <br />
          3.5 Taxes. All amounts payable by Customer to CODA hereunder are
          exclusive of any Taxes. Customer will be solely responsible for
          payment of any Taxes, except for those taxes based on the income of
          CODA. Customer may not withhold any Taxes from any amounts due CODA
          and will pay Taxes properly invoiced by CODA.
          <br />
          3.6 Invoices will be issued by CODA (a) on or after the Effective
          Date; (b) after excess usage has occurred; (c) upon renewal at the
          commencement of each Renewal Term.
          <br />
          3.7 CODA will issue the invoice in advance, which will be sent using
          one of the methods set out in the Agreement.
          <br />
          3.8 Customer will pay the invoice within 10 days of the date of the
          invoice.
          <br />
          3.9 If Customer does not dispute an invoiced amount within 3 days of
          its receipt, Customer’s
          <br />
          non-contestation represents an acceptance to pay the amount set out in
          the invoice.
          <br />
          3.10 Overdue Payments. If payment of any fee is not made when due and
          payable, a late fee will accrue at the rate of 1.5% per month.
          Customer will pay all reasonable expenses of collection of any overdue
          fee.
          <br />
          3.11 True-up. If during the Subscription Term, Customer exceeds the
          Volume Limitations by more than the burst allocation set out in the
          Order Form for more than 10 consecutive days, than a true-up of the
          fees will occur. CODA will invoice Customer for the excess usage a
          pro-rata amount of the applicable fees for the duration of the active
          subscription as part of the true-up process.
          <br />
          3.12 All travel expenses of CODA and of its partners/third parties due
          to the provision of any implementation or upgrade services, and/or any
          other reason resulting from the performance of the Agreement, will be
          reimbursed by Customer. All expenses shall be evidenced by supporting
          documents (for example invoices or receipts).
          <br />
          3.13 CODA reserves the right to change the rates, applicable charges,
          and usage policies and to introduce new charges, listed on such Order
          Form upon providing Customer written notice thereof (which may be
          provided by e-mail) at least 60 days prior to the end of the then
          current Initial Term or Renewal Term (as applicable).
        </p>
        <p>
          <strong>4. CONFIDENTIALITY</strong>
          <br />
          4.1 Confidential Information. During the Subscription Term of this
          Agreement, each Party (the “Receiving Party”) will treat any
          information provided to it by the other Party (the “Disclosing Party”)
          which is either designated in writing as proprietary or confidential,
          or by the nature of which is clearly confidential or proprietary, as
          that Party’s confidential information (“Confidential Information”). A
          Receiving Party shall not disclose the Disclosing Party’s Confidential
          Information to any third party without the prior written consent of
          the Disclosing Party, nor make use of any of the Disclosing Party’s
          Confidential Information except in its performance under the
          Agreement. Each Party accepts responsibility for the actions of its
          agents or employees and shall protect the other Party’s Confidential
          Information in the same manner as it protects its own Confidential
          Information, but in no event with less than reasonable care. The
          Parties expressly agree that the terms and pricing of the Agreement
          are Confidential Information. A Receiving Party shall promptly notify
          the Disclosing Party upon becoming aware of a breach or threatened
          breach hereunder and shall cooperate with any reasonable request of
          the disclosing Party in enforcing its rights.
          <br />
          4.2 Exclusions. Information will not be deemed Confidential
          Information if such information:
          (i) is known prior to receipt from the Disclosing Party, without any
          obligation of confidentiality; (ii) becomes known to the receiving
          Party directly or indirectly from a source other than one having an
          obligation of confidentiality to the Disclosing Party; (iii) becomes
          publicly known or otherwise publicly available, except through a
          breach of the Agreement; or (iv) is independently developed by the
          Receiving Party without use of, reference to, and/or reliance upon,
          the Disclosing Party’s Confidential Information. The Receiving Party
          may disclose Confidential Information pursuant to the requirements of
          applicable law, legal process or government regulation, provided that,
          unless prohibited from doing so by law enforcement or court order, the
          Receiving Party gives the Disclosing Party reasonable prior written
          notice, and such disclosure is otherwise limited to the required
          disclosure.
          <br />
          4.3 Non-use and Non-disclosure. With respect to Confidential
          Information of the Disclosing Party, the Receiving Party agrees to:
          (i) use the same degree of care to protect the confidentiality, and
          prevent the unauthorized use or disclosure, of such Confidential
          Information it uses to protect its own proprietary and confidential
          information of like nature, which shall not be less than a reasonable
          degree of care, (ii) hold all such Confidential Information in strict
          confidence and not use, sell, copy, transfer reproduce, or divulge
          such Confidential Information to any third party, (iii) not use such
          Confidential Information for any purposes whatsoever other than the
          performance of, or as otherwise authorized by, the Agreement.
          <br />
          4.4 Remedies for Breach of Obligation of Confidentiality. The
          Receiving Party acknowledges that breach of its obligations of
          confidentiality may cause irreparable harm to the Disclosing Party for
          which the Disclosing Party may not be fully or adequately compensated
          by recovery of monetary damages. Accordingly, in the event of any
          violation, or threatened violation, by the Receiving Party of its
          obligations under this Section, the Disclosing Party shall be entitled
          to seek injunctive relief from a court of competent jurisdiction in
          addition to any other remedy that may be available at law or in
          equity, without the necessity of posting bond or proving actual
          damages.
        </p>
        <p>
          <strong>5. LIMITED WARRANTY</strong>
          <br />
          5.1 Service Warranty. CODA warrants that, during the Subscription
          Term: (i) the Service will conform, in all material respects, with the
          applicable Documentation; and (ii) it will not materially decrease the
          overall functionality of the Service. CODA makes no warranty regarding
          third party features or services. For any breach of the above
          warranty, CODA will, at no additional cost to Customer, use
          commercially reasonable efforts to provide remedial services necessary
          to enable the Service to conform to the warranty. Customer will
          provide CODA with a reasonable opportunity to remedy any breach and
          reasonable assistance in remedying any defects. The remedies set out
          in this subsection are Customer’s sole remedies for breach of the
          above warranty.
          <br />
          5.2 Disclaimer. CODA DOES NOT REPRESENT THAT THE SERVICE WILL BE
          UNINTERRUPTED, ERROR-FREE, OR WILL MEET CUSTOMER’S REQUIREMENTS.
          EXCEPT FOR THE WARRANTY STATED IN SECTION 5.1, CODA MAKES NO OTHER
          WARRANTIES OR REPRESENTATIONS, EXPRESS OR IMPLIED, INCLUDING, WITHOUT
          LIMITATION, THOSE OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
          PURPOSE, TITLE, OR NON- INFRINGEMENT OF THIRD PARTY RIGHTS. CODA MAKES
          NO WARRANTY THAT ALL SECURITY RISKS OR THREATS WILL BE DETECTED BY USE
          OF THE SERVICE OR THAT FALSE POSITIVES WILL NOT BE FOUND.
          <br />
          5.3 Artificial Intelligence and Automation Disclaimer. Customer is
          responsible for implementing appropriate internal procedures and
          oversight to the extent it utilizes the configuration of workflows and
          processes, including but not limited to containment actions,
          quarantine actions, kill processes and similar functionalities
          (“Artificial Intelligence and Automation Functionalities”). EXCEPT FOR
          THE WARRANTY IN SECTION 5.1, THE ARTIFICIAL INTELLIGENCE AND
          AUTOMATION FUNCTIONALITIES ARE MADE AVAILABLE BY CODA ON AN “AS-IS”
          BASIS TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW. CODA’s
          Artificial Intelligence and Automation Functionalities are not
          designed, intended or licensed for use in hazardous environments or
          other applications where a malfunction could cause property damage or
          personal injury, and CODA specifically disclaims any liability in
          connection with any such use. Customer assumes all risks in using
          third-party products or services in connection with the Artificial
          Intelligence and Automation Functionalities.
        </p>
        <p>
          <strong>6. LIMITATION OF LIABILITY</strong>
          <br />
          6.1 Limitation on Indirect Liability. <br />
          SUBJECT TO SECTION 6.3, NEITHER PARTY WILL BE LIABLE UNDER THIS
          AGREEMENT FOR LOST REVENUES OR PROFIT, GOODWILL, BUSINESS OPPORTUNITY,
          TURNOVER, REPUTATION, ANTICIPATED SAVING, OR WASTED EXPENDITURE, OR
          FOR DAMAGE TO OR LOSS OF DATA, OR INDIRECT, SPECIAL, INCIDENTAL,
          CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, EVEN IF THE PARTY KNEW
          OR SHOULD HAVE KNOWN THAT SUCH DAMAGES WERE POSSIBLE.
          <br />
          6.2 Limitation on Amount of Liability. SUBJECT TO SECTION 6.3, EACH
          PARTY’S TOTAL LIABILITY IN CONTRACT, TORT (INCLUDING NEGLIGENCE) OR
          RESTITUTION, OR FOR BREACH OF STATUTORY DUTY OR MISREPRESENTATION, OR
          OTHERWISE, ARISING UNDER OR IN CONNECTION WITH THE AGREEMENT SHALL IN
          ALL CIRCUMSTANCES BE LIMITED TO AN AMOUNT EQUAL TO THE VALUE OF THE
          FEES PAID OR PAYABLE BY CUSTOMER IN THE INITIAL 12 MONTHS OF THE
          SUBSCRIPTION TERM.
          <br />
          6.3 Exceptions to Limitations. The limitation of liability in Section
          6.2 applies to the fullest extent permitted by applicable law, except
          that there is no limitation on loss, claims, or damages directly
          arising out of: (i) violations of CODA’s intellectual property rights
          by Customer; (ii) violations of Customer’s confidentiality obligations
          as set forth in Section 4 of this Agreement; or (iii) Customer’s
          indemnification obligations.
        </p>
        <p>
          <strong>7. TERM AND TERMINATION</strong>
          <br />
          7.1 Term. The Agreement shall commence on the Commencement Date and
          shall continue in effect until otherwise terminated in accordance with
          Section 7.3 below. The Agreement will automatically renew for a
          Renewal Term at the end of the Initial Term, and at the end of each
          Renewal Term thereafter, unless (i) otherwise indicated on the Order
          Form; or (ii) either Party provides the other with written notice of
          its election not to renew the Agreement for a further Renewal Term at
          least 30 days prior to the expiry of the Initial Term or the current
          Renewal Term (as applicable).
          <br />
          7.2 Suspension of Service.
          <br />
          (a) CODA may suspend Customer’s and/or any Authorized User’s access to
          the Service upon notice (which may be made by email or telephone) if
          CODA reasonably concludes that Customer or any Authorized User is
          using the Service to engage in illegal activity, and/or Customer’s or
          any Authorized User’s use of the Service is causing or may cause
          immediate, material and ongoing harm to others. In the event that CODA
          suspends Customer’s or any Authorized User’s access to the Service,
          CODA will use commercially reasonable efforts to limit the suspension
          to the offending portion of the Service and work with Customer to
          resolve the issues requiring the suspension of Service. CODA shall not
          be liable to Customer nor to any third party for any suspension of the
          Service under this Section 7.2.
          <br />
          (b) In addition to the foregoing provisions of Section 7.2(a), CODA
          also reserves the right to suspend Customer’s and/or any Authorized
          User’s access to the Service upon notification, without having to
          terminate the Agreement, if Customer is more than thirty days late
          with respect to any payments due hereunder. Upon such suspension,
          Customer shall still be liable for all payments that have accrued
          prior to the date of suspension and that will accrue throughout the
          remainder of the Subscription Term. CODA will not be obligated to
          restore access to the Service until Customer has paid all fees owed to
          CODA.
          <br />
          7.3 Termination. Not with standing the foregoing, either Party may
          terminate the Agreement:
          (i) immediately in the event of a material breach of the Agreement by
          the other Party that is not cured within thirty days of written notice
          thereof from the other Party or, if such breach is incapable of cure,
          immediately upon written notice; or (ii) immediately if the other
          Party ceases doing business or is the subject of a voluntary or
          involuntary bankruptcy, insolvency or similar proceeding, that is not
          dismissed within sixty days of filing. Either Party may also terminate
          this Agreement upon no less than thirty days’ prior written notice to
          the other party for any reason if at such time there are no
          outstanding Subscription Terms then currently in effect. All rights
          and obligations of the Parties which by their nature are reasonably
          intended to survive such termination or expiration (including Sections
          3, 4, 6, 8, 9, 11, and 12) will survive termination or expiration of
          the Agreement. Except as expressly provided herein, termination of the
          Agreement by either Party will be a nonexclusive remedy for breach and
          will be without prejudice to any other right or remedy of such Party.
          <br />
          7.4 Effect of Termination. Effect of Termination. Upon any termination
          or expiration of the Agreement, CODA shall no longer provide the
          applicable Service to Customer and Customer and all Authorized Users
          must cease using the Service and send no further Customer Data to
          CODA. Termination of the Agreement shall not relieve Customer of its
          obligation to pay all fees that have accrued or have become payable by
          Customer hereunder. Customer agrees that following termination of
          Customer’s account and/or use of the Service, CODA may immediately
          deactivate Customer’s account and that following a reasonable period
          not to exceed 90 days, shall be entitled to delete Customer’s account
          and all Customer Data from the Service.
          <br />
          8. OWNERSHIP; USE OF CONTENT; OBLIGATIONS; INTELLECTUAL PROPERTY
          RIGHTS
          <br />
          8.1 Customer Data. As between CODA and Customer, Customer retains
          ownership of all right, title, and interest in and to all Customer
          Data, and Customer is solely responsible for all Customer Data. CODA
          does not guarantee the accuracy, integrity, or quality of such
          Customer Data. Customer shall be solely responsible for providing,
          updating, uploading, maintaining and backing-up all Customer Data.
          CODA may use Customer Data solely as necessary: (i) to provide the
          Service to Customer; (ii) in anonymized and aggregated form, to
          generate statistics and produce reports; and (iii) to collect metadata
          about feature usage and use such metadata and Customer Data in order
          to test, improve and alter the functionality, development and delivery
          of the Service.
          <br />
          8.2 CODA Service. As between CODA and Customer, CODA retains ownership
          of all right, title, and interest in and to all intellectual property
          in and about the Service and the Documentation. CODA shall notify
          Customer of any Open Source Software incorporated in the Service, or
          otherwise used by CODA in its provision of the Service, at Customer’s
          written request.
          <br />
          8.3 Customer Obligations. Customer shall not (and shall ensure that
          Authorized Users do not): (i) upload or otherwise transmit, display,
          or distribute any Customer Data to the Service that infringes any
          trademark, trade secret, copyright or other proprietary or
          intellectual property rights of any person or that is otherwise
          infringing, unlawful, harmful, threatening, or offensive; (ii) upload
          or otherwise transmit to the Service any material that contains
          software viruses or any other computer code, files, or programs
          designed to interrupt, destroy or limit the functionality of any
          computer software or hardware or telecommunications equipment; or
          (iii) use any automated system (including &#8220;robots&#8221;,
          &#8220;spiders&#8221;, or &#8220;offline readers&#8221;) to access the
          Service in a manner that sends more request messages to the Service
          than a human can reasonably produce in the same period of time by
          using a conventional online web browser, or otherwise interfere with
          or disrupt the Service.
        </p>
        <p>
          <strong>9. INDEMNIFICATION</strong>
          <br />
          9.1 By CODA. CODA will indemnify, defend, and hold harmless Customer
          from and against all liabilities, damages, and costs (including
          settlement costs and reasonable attorneys&#8217; fees) arising out of
          a third party claim that CODA’s technology used to provide the Service
          infringes or misappropriates any U.S. patent, copyright, trade secret,
          or trademark of such third party. Notwithstanding the foregoing, in no
          event shall CODA have any obligations or liability under this Section
          arising from: (i) use of any Service in a manner not anticipated by
          this Agreement or in combination with materials not furnished by CODA;
          or (ii) any content, information, or data provided by Customer or
          other third parties. If the Service is or is likely to become subject
          to a claim of infringement or misappropriation, then CODA will, at its
          sole option and expense, either: (i) obtain for Customer the right to
          continue using the Service; (ii) replace or modify the Service to be
          non-infringing and substantially equivalent to the infringing Service;
          or (iii) if options (i) and (ii) above cannot be accomplished despite
          the reasonable efforts of CODA, then CODA may terminate Customer’s
          rights to use the infringing Service and will refund pro- rata any
          prepaid fees for the infringing portion of the Service. THE RIGHTS
          GRANTED TO CUSTOMER UNDER THIS SECTION 9.1 SHALL BE CUSTOMER’S SOLE
          AND EXCLUSIVE REMEDY FOR ANY ALLEGED INFRINGEMENT BY THE SERVICE OF
          ANY PATENT, COPYRIGHT, OR OTHER PROPRIETARY RIGHT.
          <br />
          9.2 By Customer. Customer will indemnify, defend, and hold harmless
          CODA from and against all liabilities, damages, and costs (including
          settlement costs and reasonable attorneys&#8217; fees) arising out of:
          (i) Customer’s or any Authorized User’s use of the Service in
          violation of this Agreement or applicable law; (ii) any Authorized
          User’s use of the Service in violation of the agreement entered into
          by Customer and the relevant Authorized User pursuant to Section
          2.1(b), or otherwise not in accordance with this Agreement or
          applicable law; (iii) Customer’s breach of the representations and
          warranties made in Sections 2.5 and 11.2 of this Agreement; or (iv) a
          third party claim that CODA’s use of any Customer Data, or other
          information or materials made available by Customer or any Authorized
          User for use in connection with the Service, infringes or
          misappropriates any patent, copyright, trade secret, or trademark of
          such third party.
        </p>
        <p>
          10. AVAILABILITY; DOWNTIME; SUPPORT
          <br />
          10.1 Downtime. Subject to this Agreement and the Service Level
          Agreement, CODA shall use commercially reasonable efforts to provide
          the Service twenty-four hours a day, seven days a week throughout the
          Subscription Term. Customer agrees that from time to time the Service
          may be inaccessible or inoperable for various reasons, including: (i)
          equipment malfunctions; (ii) periodic maintenance procedures or
          repairs which CODA may undertake from time to time; or (iii) causes
          beyond the control of CODA or which are not reasonably foreseeable by
          CODA, including interruption or failure of telecommunication or
          digital transmission links, hostile network attacks or network
          congestion, or other failures (collectively “Downtime”). CODA shall
          use commercially reasonable efforts to provide twenty-four hour
          advance notice to Customer in the event of any scheduled Downtime.
          CODA shall have no obligation during performance of such operations to
          mirror Customer Data or to transfer Customer Data. CODA shall use
          commercially reasonable efforts to minimize any disruption,
          inaccessibility, and/or inoperability of the Service in connection
          with Downtime, whether scheduled or not.
          <br />
          10.2 Support Services. CODA shall provide support during any
          Subscription Term, or else as otherwise set forth on the applicable
          Order Form subject to CODA’s support policy, located at
          http://partner.codaintelligence.com.
          <br />
          10.3 Installation and Configuration. Unless otherwise provided on an
          Order Form or SOW, Customer is responsible for installing and
          configuring any Service.
          <br />
          10.4Professional Services. All other implementation services,
          customization, integration, data import and export, monitoring,
          technical support, maintenance, training, backup and recovery, and
          change management (“Professional Services”) shall be agreed to be the
          parties in a written statement of work (“Statement of Work” or “SOW”).
          Each applicable Statement of Work shall specify and further describe
          the Professional Services to be provided in accordance with the
          representations and warranties set forth herein, including (as
          applicable) details of the Professional Services offered, limitations
          and/or dependencies on Customer, milestones, fees, term and other
          applicable terms and conditions. CODA shall have sole discretion in
          staffing the professional services and may assign the performance of
          any portion of the professional services to any subcontractor.
          Customer will have a non-exclusive, non-transferable license to use
          any deliverables or other work product developed by CODA in the
          performance of the professional services, which are delivered to
          Customer, upon Customer&#8217;s payment in full of all amounts due for
          such deliverables or work product. CODA retains ownership of all
          information, software, and other property owned by it prior to this
          Agreement or which it develops independently of this Agreement and all
          deliverables and work product compiled or developed by CODA in the
          performance of the professional services.
          <br />
          10.5 Professional Services Rescheduling. If Customer reschedules the
          Services, Customer will be responsible for any expenses incurred by
          CODA due to such rescheduling. If performance of the Services is
          delayed by Customer’s acts or omissions, including Customer’s failure
          to meet the requirements set forth in an SOW, Customer will forfeit
          the duration of such delay from its Services time.
        </p>
        <p>
          <strong>11. DATA PRIVACY</strong>
          <br />
          11.1 Personal Data. To the extent that CODA processes personal data
          about any individual in the course of providing the Service, the
          Parties shall comply with CODA’s Data Processing Addendum (accessible
          at www.codaintelligence.com/terms), which is incorporated herein by
          reference and is an integral part of the Agreement.
          <br />
          11.2 Data Privacy. Customer represents and warrants that Customer has
          obtained all necessary rights to permit CODA to process Customer Data
          from and about Customer, any Authorized User and any other person to
          which the Customer Data relates, including, without limitation, data
          from endpoints, servers, cloud applications, and logs.
          <br />
          11.3 Data Security. CODA shall implement appropriate technical and
          organizational measures to protect Customer Data from accidental or
          unlawful destruction, loss, or alteration, unauthorized disclosure of
          or access to Customer Data. Such measures may include, as appropriate
          (a) the encryption of Customer Data; (b) the ability to ensure the
          ongoing confidentiality, integrity, availability and resilience of
          systems and services; (c) a process for regularly testing, assessing
          and evaluating the effectiveness of technical and organizational
          measures for ensuring the security of Customer Data.
        </p>
        <p>
          <strong>12. GENERAL PROVISIONS</strong>
          <br />
          12.1 Miscellaneous. (a) This Agreement shall be construed in
          accordance with and governed for all purposes by the laws of the State
          of Delaware, excluding its choice of law provisions and each Party
          consents and submits to the jurisdiction and forum of the state and
          federal courts in the State of Delaware all questions and
          controversies arising out of this Agreement and waives all objections
          to venue and personal jurisdiction in these forums for such disputes;
          (b) the Agreement constitutes the entire agreement and understanding
          of the Parties hereto with respect to the subject matter hereof and
          supersedes all prior agreements and undertakings, both written and
          oral; (c) the Agreement may not be modified except by a writing signed
          by each of the Parties; (d) in case any one or more of the provisions
          contained in the Agreement shall for any reason be held to be invalid,
          illegal, or unenforceable in any respect, such invalidity, illegality,
          or unenforceability shall not affect any other provisions of the
          Agreement but rather the Agreement shall be construed as if such
          invalid, illegal, or other unenforceable provision had never been
          contained herein; (e) Customer shall not assign or otherwise transfer
          its rights or obligations hereunder without CODA&#8217;s advance
          written consent; (f) subject to the foregoing subsection (e), this
          Agreement shall be binding upon and shall inure to the benefit of the
          Parties hereto and their successors and permitted assigns; (g) no
          waiver of any right or remedy hereunder with respect to any occurrence
          or event on one occasion shall be deemed a waiver of such right or
          remedy with respect to such occurrence or event on any other occasion;
          (h) nothing in the Agreement, express or implied, is intended to or
          shall confer upon any other person any right, benefit, or remedy of
          any nature whatsoever under or by reason of the Agreement, including
          but not limited to any of Customer’s own clients, customers, or
          employees; (i) the headings to the sections of the Agreement are for
          ease of reference only and shall not affect the interpretation or
          construction of the Agreement; and (j) in the event of a conflict
          between the terms of these Terms of Service and the terms of an Order
          Form, the terms in the Order Form shall take precedence to the extent
          of the conflict.
          <br />
          12.2 Injunctive Relief. Notwithstanding any other provision of this
          Agreement, both Parties acknowledge that any breach of the Agreement
          may cause the other Party irreparable and immediate damage for which
          remedies other than injunctive relief may be inadequate. Therefore,
          the Parties agree that, in addition to any other remedy to which a
          Party may be entitled hereunder, at law or equity, that party shall be
          entitled to seek an injunction to restrain such use in addition to
          other appropriate remedies available under applicable law.
          <br />
          12.3 Relationship of the Parties. CODA and Customer are independent
          contractors, and nothing in the Agreement shall be construed as making
          them partners or creating the relationships of principal and agent
          between them, for any purpose whatsoever. Neither party shall make any
          contracts, warranties, or representations or assume or create any
          obligations, express or implied, in the other Party’s name or on its
          behalf.
          <br />
          12.4 US Government Restricted Rights. US Government Restricted Rights.
          This Section applies to all acquisitions of the Service by or for the
          US federal government, or by any prime contractor or subcontractor (at
          any tier) under any contract, grant, cooperative agreement, or other
          activity with the federal government for the Government’s end use. The
          Service are “commercial items” as that term is defined at FAR 2.101.
          If Customer is an Executive Agency (as defined in FAR 2.101) of the
          U.S. Federal Government (“Government”), CODA provides the Service,
          including any related technical data and/or professional services in
          accordance with the following: If a right to access the Service is
          procured by or on behalf of any Executive Agency (other than an
          Executive Agency within the Department of Defense (DoD)), the
          Government is granted, in accordance with FAR 12.211 (Technical Data)
          and FAR 12.212 (Computer Software), only those rights in technical
          data and software customarily provided to CODA’s customers as such
          rights are described in this Agreement. If a right to access the
          Service is procured by or on behalf of any Executive Agency within the
          DoD, the Government is granted, in accordance with DFARS 227.7202-3
          (Rights in commercial computer software or commercial computer
          software documentation), only those rights in technical data and
          software that are customarily provided to CODA’s customers as such
          rights are described in this Agreement. In addition, DFARS
          252.227-7015 (Technical Data – Commercial Items) applies to technical
          data provided by CODA to an Executive Agency within the DoD. Note,
          however, that Subpart 227.72 does not apply to computer software or
          computer Service documentation acquired under GSA schedule contracts.
          Except as expressly permitted under this Agreement, no other rights or
          licenses are granted to the Government. Any rights requested by the
          Government and not granted under this Agreement must be separately
          agreed in writing with CODA. This Section 12.4 of the Agreement is in
          lieu of, and supersedes, any other FAR, DFARS, or other clause,
          provision, or supplemental regulation that addresses Government rights
          in the Service.
          <br />
          12.5 Force Majeure. Other than payment obligations hereunder, neither
          Party will be liable for any inadequate performance to the extent
          caused by a condition that was beyond the Party&#8217;s reasonable
          control (including, but not limited to, natural disaster, act of war
          or terrorism, riot, global health crisis, acts of God, or government
          intervention), except for mere economic hardship, so long as the Party
          continues to use commercially reasonable efforts to resume
          performance.
          <br />
          12.6 No Reliance. Customer represents that it has not relied on the
          availability of any future version of the Service or any future
          product or service in executing the Agreement or purchasing any
          Service hereunder.
          <br />
          12.7 Notices. Unless specified otherwise herein, (i) all notices must
          be in writing and addressed to the attention of the other
          Party&#8217;s legal department and primary point of contact and (ii)
          notice will be deemed given: (a) when verified by written receipt if
          sent by personal courier, overnight courier, or when received if sent
          by mail without verification of receipt; or (b) when verified by
          automated receipt or electronic logs if sent by email. When sent by
          email, notices must be sent to CODA at{" "}
          <a href="mailto:notices@codaintelligence.com">
            notices@codaintelligence.com
          </a>
          <br />
          12.8 Publicity. Customer acknowledges that CODA may use Customer’s
          name and logo for the purpose of identifying Customer as a customer of
          CODA products and/or services (including in CODA’s marketing and
          promotional materials). CODA will cease using Customer’s name and logo
          upon Customer’s written request.
          <br />
          12.9 Compliance with Law. Each Party agrees to comply with all
          federal, state, and local laws and regulations including but not
          limited to export law, and those governing the use of network
          scanners, vulnerability assessment software products, encryption
          devices, user monitoring, and related software in all jurisdictions in
          which systems are scanned, scanning is controlled, or users are
          monitored.
          <br />
          12.10 Links and Third Party Content. Customer agrees that CODA shall
          not be responsible for applications, services, software, or other
          products supplied by a third party (excluding those delivered as part
          of the Service) that Customer chooses to use with or integrate with
          the Service, even if such third-party service interoperates with a
          Service.
          <br />
          12.11 Rights to Audit. [CODA may, on reasonable notice to Customer,
          during normal business hours, access Customer’s business premises in
          order to audit its use of the Service and its compliance with the
          Agreement.] If any unauthorized access to, or use of, the Service is
          discovered (including any access to and/or use of the Service by any
          person who does not have a right to access and/or use the Service
          under the Agreement), Customer agrees to immediately cease such use,
          upon receipt of a written notice. In the event that Customer does not
          comply with the request it shall be liable for any damages arising out
          of the continued access to and/or use of the Service, subject to the
          terms and conditions of the Agreement.
          <br />
          12.12 Security. CODA may, from time to time, host and/or maintain the
          Services using a third party technology service provider and Customer
          acknowledges that CODA cannot offer any additional or modified
          procedures other than those put in place by such technology provider
          with respect to such technology service.
          <br />
          12.13 Assignment. Neither Party may assign or otherwise transfer this
          Agreement to any third party without the prior written consent of the
          other Party; provided that no consent is required in connection with
          an assignment to an Affiliate or in connection with any merger,
          reorganization, consolidation, sale of assets or similar transaction.
          CODA may sublicense any or all of its obligations hereunder. For the
          avoidance of doubt, a third-party technology provider that provides
          features or functionality in connection with a Service shall not be
          deemed a sublicensee under the Agreement.
          <br />
          [END]
        </p>
      </section>
      <Footer />
    </>
  );
}
