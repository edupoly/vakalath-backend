import React from 'react';
import { Document, Page, Text, StyleSheet, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12
  },
  paragraph: {
    marginBottom: 10,
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  h2: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  listItem: {
    marginLeft: 10,
    marginBottom: 5,
  },
});

const MyDocument = () => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.paragraph}>MEMORANDUM OF CRIMINAL PETITION</Text>
  <Text style={styles.paragraph}>(UNDER SECTION 438 CRIMINAL PROCEDURE CODE)</Text>
  <Text style={styles.paragraph}>IN THE HIGH COURT OF JUDICATURE OF ANDHRA PRADESH</Text>
  <Text style={styles.paragraph}>AT HYDERABAD</Text>
  <Text style={styles.paragraph}>CRL.P.No.                    OF 2007</Text>
  <Text style={styles.paragraph}>BETWEEN:</Text>
  <Text style={styles.paragraph}>_________________</Text>
  <Text style={styles.paragraph}>_________________</Text>
  <Text style={styles.paragraph}>_________________</Text>
  <Text style={styles.paragraph}>_________________</Text>
  <Text style={styles.paragraph}></Text>
  <Text style={styles.paragraph}>..PETITIONER/ACCUSED</Text>
  <Text style={styles.paragraph}>AND</Text>
  <Text style={styles.paragraph}>THE STATE OF A.P. REP.BY</Text>
  <Text style={styles.paragraph}>PUBLIC PROSECUTOR</Text>
  <Text style={styles.paragraph}>..RESPONDENT/COMPLAINANT</Text>
  <Text style={styles.paragraph}>The address for service of all notices and process on the above named Petitioner is that of his counsel M/s ###, Advocate, Hyderabad.</Text>
  <Text style={styles.paragraph}></Text>
  <Text style={styles.h1}>PETITION FOR ANTICIPATORY BAIL</Text>
  <Text style={styles.paragraph}>The petitioner is accused in Crime No.______ of 2007  of ________________ Police Station. He is alleged to have committed offenses punishable under Sections ______________. He is apprehending arrest in the above crime.</Text>
  <Text style={styles.paragraph}>1.   The prosecution case is briefly follows:-</Text>
  <Text style={styles.paragraph}>2.   The Petitioner submits that he is innocent of the offenses alleged against him and he has been falsely implicated due to</Text>
  <Text style={styles.paragraph}>3.   The petitioner submits that</Text>
  <Text style={styles.paragraph}></Text>
  <Text style={styles.paragraph}>4.   The petitioner submits that</Text>
  <Text style={styles.paragraph}>5.   The petitioner submits that</Text>
  <Text style={styles.paragraph}>6.   The petitioner submits that</Text>
  <Text style={styles.paragraph}>7.   The petitioner submits that</Text>
  <Text style={styles.paragraph}>8.   The petitioner submits that</Text>
  <Text style={styles.paragraph}>9.   The petitioner submits that  he is a permanent resident of ______________________ having fixed abode and landed property and there is no question of absconding.</Text>
  <Text style={styles.paragraph}>10.  The petitioner submits that  he filed Crl.M.P.No. _________ before the learned Sessions Judge ____________ and the same was dismissed on ________.</Text>
  <Text style={styles.paragraph}>11.  The Petitioner submits that he is willing to furnish suitable security and abide by any conditions which this Hon'ble Court may deem fit to impose</Text>
  <Text style={styles.paragraph}>It is therefore prayed that this Hon'ble Court may be pleased to direct the Station House Officer _______________ Police Station to release the Petitioner on Bail in the event of his arrest in connection with Crime No.______ of 2007  of ____________ Police Station.</Text>
  <Text style={styles.paragraph}>HYDERABAD                          		COUNSEL FOR THE PETITIONER</Text>
  <Text style={styles.paragraph}>DATE:</Text>
  <Text style={styles.paragraph}>_______ DISTRICT</Text>
  <Text style={styles.paragraph}>HIGH COURT HYDERABAD</Text>
  <Text style={styles.paragraph}>Crl.P.No.         OF 2007</Text>
  <Text style={styles.paragraph}>PETITION FOR ANTICIPATORY BAIL</Text>
  <Text style={styles.paragraph}>M/s  ### (000)</Text>
  <Text style={styles.h2}>Advocate</Text>
  <Text style={styles.paragraph}>COUNSEL FOR THE PETITIONER</Text>
    </Page>
  </Document>
);

export default MyDocument;