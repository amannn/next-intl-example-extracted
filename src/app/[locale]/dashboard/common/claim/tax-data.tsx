import {useExtracted} from 'next-intl';

export default function Content() {
  const t = useExtracted();
  t('Contact Support');
  t('By confirming, you are stating that the provided Tax Identification Number is accurate and belongs to you.');
  t('By confirming, you are stating that the provided VAT-ID is accurate and belongs to you. Providing false information may constitute tax fraud.');
  t('Cancel');
  t('Confirm');
  t('Country code + numbers');
  t('DE123456789');
  t('e.g. 123/4556/8900');
  t('e.g. GB123456789');
  t('Enter your European VAT registration number');
  t('Enter your Tax Identification Number. You take responsibility for the accuracy of the information provided.');
  t('How to find this information?');
  t('I need help with this.');
  t('I need to pay VAT in Europe');
  t('I\'m VAT exempt');
  t('If you need additional help, please contact support.');
  t('In certain regions, you need to provide a Tax Identification Number, even if you are VAT exempt. This is the unique number assigned to your business by the tax authority.');
  t('Save');
  t('Select \'I\'m VAT exempt\' if you are a small business below the VAT threshold, or \'I need to pay VAT in Europe\' if your business is VAT-registered. If you don\'t know, please contact your local tax authority.');
  t('Select whether you are a VAT payer in Europe.');
  t('Tax Identification Number (TIN)');
  t('The format of the VAT number is usually a country code followed by numbers. For example,');
  t('VAT Number');
  t('VAT Status');
  t('Warning: Tax Information');
  t('What do I need to select?');
  t('What is the format of the VAT number?');
  t('Why do I need to enter a Tax Identification Number (TIN)?');
  t('You are not in an EU country. No need to provide VAT information.');
}
