import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import MediumText from "@/components/Utils/MediumText";
import { Header, Icon, ListItem } from "@rneui/themed";
import BoldText from "@/components/Utils/BoldText";
import { Link } from "expo-router";

export default function Privacy() {
  return (
    <View className="flex-1">
      <Header
        backgroundColor="transparent"
        centerComponent={{
          text: "Privacy Policy",
          className: "font-black text-2xl",
        }}
      />
      <ScrollView
        contentContainerStyle={{ paddingVertical: 20, paddingHorizontal: 10 }}
      >
        <MediumText className="text-lg">
          At Rizoka, the privacy of our customers and users of our services and
          their Personal Data is very important to us. In line with our company
          policies, we have written this Privacy Policy to explain our privacy
          practices regarding how we collect and process your data, how we
          retain these data, and how we share your personal data when you visit
          our website, mobile applications, or use our digital platforms, as
          well as your rights as a data subject.
        </MediumText>
        <MediumText className="text-lg mt-3">
          The Privacy Policy between Rizoka and you reflects our commitment to
          protecting your privacy and complying with the relevant data
          protection laws of the Federal Republic of Nigeria, including the
          Nigeria Data Protection Act 2023 (NDPC) and other applicable
          regulatory bodies.
        </MediumText>
        <BoldText className="mt-3 font-black text-2xl">
          1. Data Collection and Usage
        </BoldText>
        <MediumText className="text-lg mt-3">
          We collect several types of information for various purposes,
          including identifying you as a real and existing human and providing
          and delivering our products and services to you
        </MediumText>
        <BoldText className="mt-3 font-black text-2xl">
          1.1 Types of Data We Collect
        </BoldText>
        <MediumText className="text-lg mt-3 mb-2">
          While using our services or creating an account on our website or
          accessing our platform through our mobile app, we may ask you to
          provide certain sensitive personal information, including but not
          limited to :
        </MediumText>
        <ListItem
          containerStyle={{
            backgroundColor: "transparent",
            padding: 0,
            paddingBottom: 5,
          }}
        >
          <Icon name="circle-small" type="material-community" />
          <ListItem.Content>
            <MediumText className="text-lg">Email address</MediumText>
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={{
            backgroundColor: "transparent",
            padding: 0,
            paddingBottom: 5,
          }}
        >
          <Icon name="circle-small" type="material-community" />
          <ListItem.Content>
            <MediumText className="text-lg">
              First name and other names
            </MediumText>
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={{
            backgroundColor: "transparent",
            padding: 0,
            paddingBottom: 5,
          }}
        >
          <Icon name="circle-small" type="material-community" />
          <ListItem.Content>
            <MediumText className="text-lg">Phone number</MediumText>
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={{
            backgroundColor: "transparent",
            padding: 0,
            paddingBottom: 5,
          }}
        >
          <Icon name="circle-small" type="material-community" />
          <ListItem.Content>
            <MediumText className="text-lg">
              House address, country, state, city
            </MediumText>
          </ListItem.Content>
        </ListItem>
        <BoldText className="mt-3 font-black text-xl">
          1.1.1 Depending on the service you request, we may also ask for
          additional documents, such as:
        </BoldText>
        <MediumText className="text-lg mt-3 mb-2">
          While using our services or creating an account on our website or
          accessing our platform through our mobile app, we may ask you to
          provide certain sensitive personal information, including but not
          limited to :
        </MediumText>
        <ListItem
          containerStyle={{
            backgroundColor: "transparent",
            padding: 0,
            paddingBottom: 5,
          }}
        >
          <Icon name="circle-small" type="material-community" />
          <ListItem.Content>
            <MediumText className="text-lg">BVN</MediumText>
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={{
            backgroundColor: "transparent",
            padding: 0,
            paddingBottom: 5,
          }}
        >
          <Icon name="circle-small" type="material-community" />
          <ListItem.Content>
            <MediumText className="text-lg">NIN</MediumText>
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={{
            backgroundColor: "transparent",
            padding: 0,
            paddingBottom: 5,
          }}
        >
          <Icon name="circle-small" type="material-community" />
          <ListItem.Content>
            <MediumText className="text-lg">
              Proof of address or other valid means of verification
            </MediumText>
          </ListItem.Content>
        </ListItem>
        <BoldText className="mt-3 font-black text-2xl">2. Data Usage</BoldText>
        <MediumText className="text-lg mt-3 mb-2">
          Data usage may include information such as your computer’s IP address,
          browser type, version, pages visited, time and date of visit, time
          spent on pages, unique device identifiers, and other diagnostic data.
          When you access our platform, we may identify your device and its
          location.
        </MediumText>
        <BoldText className="mt-3 font-black text-2xl">
          2.1 Purpose of Data Usage
        </BoldText>
        <MediumText className="text-lg mt-3 mb-2">
          The purpose of collecting your data includes:
        </MediumText>
        <BoldText className="mt-3 font-black text-xl">
          2.1.1 To provide our services, such as:
        </BoldText>
        <ListItem
          containerStyle={{
            backgroundColor: "transparent",
            padding: 0,
            paddingBottom: 5,
          }}
        >
          <Icon name="circle-small" type="material-community" />
          <ListItem.Content>
            <MediumText className="text-lg">
              Setting up and personalizing your account.
            </MediumText>
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={{
            backgroundColor: "transparent",
            padding: 0,
            paddingBottom: 5,
          }}
        >
          <Icon name="circle-small" type="material-community" />
          <ListItem.Content>
            <MediumText className="text-lg">
              Providing the Rizoka app and recognizing you as a user.
            </MediumText>
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={{
            backgroundColor: "transparent",
            padding: 0,
            paddingBottom: 5,
          }}
        >
          <Icon name="circle-small" type="material-community" />
          <ListItem.Content>
            <MediumText className="text-lg">
              Detecting fraud or mischief.
            </MediumText>
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={{
            backgroundColor: "transparent",
            padding: 0,
            paddingBottom: 5,
          }}
        >
          <Icon name="circle-small" type="material-community" />
          <ListItem.Content>
            <MediumText className="text-lg">
              For KYC (Know Your Customer) purposes.
            </MediumText>
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={{
            backgroundColor: "transparent",
            padding: 0,
            paddingBottom: 5,
          }}
        >
          <Icon name="circle-small" type="material-community" />
          <ListItem.Content>
            <MediumText className="text-lg">
              Enabling participation in promotions, competitions, and surveys.
            </MediumText>
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={{
            backgroundColor: "transparent",
            padding: 0,
            paddingBottom: 5,
          }}
        >
          <Icon name="circle-small" type="material-community" />
          <ListItem.Content>
            <MediumText className="text-lg">
              Improving our website, applications, products, and services.
            </MediumText>
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={{
            backgroundColor: "transparent",
            padding: 0,
            paddingBottom: 5,
          }}
        >
          <Icon name="circle-small" type="material-community" />
          <ListItem.Content>
            <MediumText className="text-lg">
              To provide certain additional features (with your consent).
            </MediumText>
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={{
            backgroundColor: "transparent",
            padding: 0,
            paddingBottom: 5,
          }}
        >
          <Icon name="circle-small" type="material-community" />
          <ListItem.Content>
            <MediumText className="text-lg">
              To diagnose and rectify issues affecting your experience.
            </MediumText>
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={{
            backgroundColor: "transparent",
            padding: 0,
            paddingBottom: 5,
          }}
        >
          <Icon name="circle-small" type="material-community" />
          <ListItem.Content>
            <MediumText className="text-lg">
              To evaluate and develop new features and technologies.
            </MediumText>
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={{
            backgroundColor: "transparent",
            padding: 0,
            paddingBottom: 5,
          }}
        >
          <Icon name="circle-small" type="material-community" />
          <ListItem.Content>
            <MediumText className="text-lg">
              For marketing and advertising (with your consent).
            </MediumText>
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={{
            backgroundColor: "transparent",
            padding: 0,
            paddingBottom: 5,
          }}
        >
          <Icon name="circle-small" type="material-community" />
          <ListItem.Content>
            <MediumText className="text-lg">
              To fulfill contractual obligations with third parties.
            </MediumText>
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={{
            backgroundColor: "transparent",
            padding: 0,
            paddingBottom: 5,
          }}
        >
          <Icon name="circle-small" type="material-community" />
          <ListItem.Content>
            <MediumText className="text-lg">
              To process transactions.
            </MediumText>
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={{
            backgroundColor: "transparent",
            padding: 0,
            paddingBottom: 5,
          }}
        >
          <Icon name="circle-small" type="material-community" />
          <ListItem.Content>
            <MediumText className="text-lg">
              To conduct business planning, reporting, and forecasting.
            </MediumText>
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={{
            backgroundColor: "transparent",
            padding: 0,
            paddingBottom: 5,
          }}
        >
          <Icon name="circle-small" type="material-community" />
          <ListItem.Content>
            <MediumText className="text-lg">
              To conduct research and surveys.
            </MediumText>
          </ListItem.Content>
        </ListItem>
        <BoldText className="mt-3 font-black text-2xl">
          3. Data Protection
        </BoldText>
        <MediumText className="text-lg mt-3 mb-2">
          We will not share your data with partners or associates except for
          transactional purposes, particularly in the case of a failed
          transaction. We do not share your data with third parties or agencies
          except with a valid court warrant from a court with the appropriate
          jurisdiction.
        </MediumText>
        <BoldText className="mt-3 font-black text-xl">
          3.1 Our Commitment to Privacy and Data Security
        </BoldText>
        <MediumText className="text-lg mt-3 mb-2">
          At Rizoka, our foremost priority is ensuring a secure and enriching
          experience for all users. Our rigorous data protection policies ensure
          personal information is handled with utmost care and transparency.
        </MediumText>
        <BoldText className="mt-3 mb-2 font-black text-xl">
          3.2 Data Retention
        </BoldText>
        <ListItem
          containerStyle={{
            backgroundColor: "transparent",
            padding: 0,
            paddingBottom: 5,
          }}
        >
          <Icon name="circle-small" type="material-community" />
          <ListItem.Content>
            <MediumText className="text-lg">
              Maintaining service performance.
            </MediumText>
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={{
            backgroundColor: "transparent",
            padding: 0,
            paddingBottom: 5,
          }}
        >
          <Icon name="circle-small" type="material-community" />
          <ListItem.Content>
            <MediumText className="text-lg">
              Making data-driven business decisions.
            </MediumText>
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={{
            backgroundColor: "transparent",
            padding: 0,
            paddingBottom: 5,
          }}
        >
          <Icon name="circle-small" type="material-community" />
          <ListItem.Content>
            <MediumText className="text-lg">
              Complying with legal obligations.
            </MediumText>
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={{
            backgroundColor: "transparent",
            padding: 0,
            paddingBottom: 5,
          }}
        >
          <Icon name="circle-small" type="material-community" />
          <ListItem.Content>
            <MediumText className="text-lg">Resolving disputes.</MediumText>
          </ListItem.Content>
        </ListItem>
        <BoldText className="mt-3 mb-2 font-black text-xl">
          3.3 Data Deletion Rights
        </BoldText>
        <MediumText className="text-lg mt-3 mb-2">
          You have the right to request the deletion of your data. However, some
          limitations due to legal or regulatory requirements may apply. If so,
          we will explain any restrictions when processing your request.
        </MediumText>
        <BoldText className="mt-3 mb-2 font-black text-2xl">
          4. Cookies and Third-Party Technologies
        </BoldText>
        <MediumText className="text-lg mt-3 mb-2">
          We use third-party technologies for data verification, such as KYC,
          and to analyze platform usage trends.
        </MediumText>
        <BoldText className="mt-3 mb-2 font-black text-xl">
          4.1 Third-Party Technologies
        </BoldText>
        <MediumText className="text-lg mt-3 mb-2">
          We may use third-party tools to verify submitted data and for
          analytics. These tools collect and process data to enhance our
          platform and services.
        </MediumText>
        <BoldText className="mt-3 mb-2 font-black text-xl">
          4.2 Cookie Controls
        </BoldText>
        <MediumText className="text-lg mt-3 mb-2">
          You can control cookie usage via your web browser settings.
        </MediumText>
        <BoldText className="mt-3 mb-2 font-black text-xl">
          4.1 Third-Party Technologies
        </BoldText>
        <MediumText className="text-lg mt-3 mb-2">
          We may update this Privacy Policy from time to time. Significant
          changes will be communicated by posting an updated version on our
          platform.
        </MediumText>
        <BoldText className="mt-3 mb-2 font-black text-xl">
          4.4 Contact Us
        </BoldText>
        <MediumText className="text-lg mt-3 mb-2">
          If you have any questions about this policy, please contact us via:
        </MediumText>
        <ListItem
          containerStyle={{
            backgroundColor: "transparent",
            padding: 0,
            paddingBottom: 5,
          }}
        >
          <Icon name="circle-small" type="material-community" />
          <ListItem.Content>
            <MediumText className="text-lg items-center gap-1">
              <MediumText className="text-lg font-bold">Email :</MediumText>
              <Link href={'mailto:support@rizoka.ng">support@rizoka.ng'}>
                <MediumText className="text-lg ml-2 text-blue">
                  support@rizoka.ng{" "}
                </MediumText>
              </Link>
              or{" "}
              <Link href={'mailto:rizokadel@aol.com'}>
                <MediumText className="text-lg ml-2 text-blue">
                  rizokadel@aol.com{" "}
                </MediumText>
              </Link>
            </MediumText>
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={{
            backgroundColor: "transparent",
            padding: 0,
            paddingBottom: 5,
          }}
        >
          <Icon name="circle-small" type="material-community" />
          <ListItem.Content>
            <MediumText className="text-lg items-center gap-1">
              <MediumText className="text-lg font-bold">WhatsApp :</MediumText>
              <Link href={'https://wa.me/2348031928207'}>
              <MediumText className="text-lg ml-2 text-blue">
                +234 (803) 192 – 8207
              </MediumText>
              </Link>
            </MediumText>
          </ListItem.Content>
        </ListItem>
      </ScrollView>
    </View>
  );
}
