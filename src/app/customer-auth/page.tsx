import { PrivyAuthCheck } from '../../components/auth/privy-auth-check';
import  CustomerFlow1  from '../customer-flow1/page';

export default function CustomerAuth() {
    return (
      <PrivyAuthCheck redirectTo="/affiliate-landing">
        <CustomerFlow1 />
      </PrivyAuthCheck>
    );
  }