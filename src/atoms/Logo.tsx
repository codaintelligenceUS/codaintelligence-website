/** Props common between logo variations */
interface CommonProps {
  /** Whether to display logo as fully white or white with primary color */
  isWhite?: boolean;
  height?: number;
}

/** Extra options for the container logic */
interface LogoProps extends CommonProps {
  /**
   * Type of logo image to show
   *
   * @default "logotype"
   */
  type?: "badge" | "logotype";
}

const PRIMARY_COLOR = "#EC1C5B";

export function Logo(props: LogoProps) {
  const { type = "logotype" } = props;

  if (type === "badge") {
    return <LogoBadge {...props} />;
  }

  return <LogoType {...props} />;
}

function LogoType(props: CommonProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105 45" fill="none">
      <path
        d="M0 19.7295C0 12.8451 5.40503 7.17817 12.1927 7.17817C15.2933 7.17817 18.2263 8.35354 20.4888 10.4944C21.4944 11.4599 21.5363 13.055 20.5726 14.0625C19.6089 15.07 18.0168 15.1119 17.0531 14.1465C15.7123 12.8871 13.9944 12.1735 12.2346 12.1735C8.25419 12.1735 5.02793 15.5317 5.02793 19.6875C5.02793 23.8433 8.25419 27.2854 12.1927 27.2854C13.9944 27.2854 15.7123 26.5718 17.0112 25.3125C18.0168 24.347 19.6089 24.389 20.5307 25.3965C21.4944 26.4039 21.4525 27.9991 20.4469 28.9226C18.1844 31.0634 15.2514 32.2388 12.1508 32.2388C5.40503 32.2808 0 26.6138 0 19.7295ZM77.3883 2.51866V29.8041C77.3883 31.1894 76.257 32.3228 74.8743 32.3228C73.5335 32.3228 72.4441 31.2733 72.3603 29.972C70.3911 31.4412 67.9609 32.3228 65.3631 32.3228C58.743 32.3228 53.338 26.6978 53.338 19.7715C53.338 12.8451 58.7011 7.22015 65.3631 7.22015C67.9609 7.22015 70.3911 8.10168 72.3603 9.5709V2.51866C72.3603 1.1334 73.4916 0 74.8743 0C76.257 0 77.3883 1.1334 77.3883 2.51866ZM72.3603 19.7295C72.3603 15.5737 69.2179 12.2155 65.3631 12.2155C61.5084 12.2155 58.3659 15.5737 58.3659 19.7295C58.3659 23.8853 61.5084 27.2854 65.3631 27.2854C69.2598 27.2854 72.3603 23.8853 72.3603 19.7295ZM105 9.69683V29.7621C105 31.1474 103.869 32.2808 102.486 32.2808C101.145 32.2808 100.056 31.2313 99.9721 29.93C98.0028 31.3993 95.5726 32.2808 92.9749 32.2808C86.3547 32.2808 80.9497 26.6558 80.9497 19.7295C80.9497 12.8032 86.3128 7.17817 92.9749 7.17817C95.5726 7.17817 98.0028 8.0597 99.9721 9.52892C100.056 8.22761 101.145 7.17817 102.486 7.17817C103.869 7.22015 105 8.31157 105 9.69683ZM99.9721 19.7295C99.9721 15.5737 96.8296 12.2155 92.9749 12.2155C89.1201 12.2155 85.9776 15.5737 85.9776 19.7295C85.9776 23.8853 89.1201 27.2854 92.9749 27.2854C96.8296 27.2854 99.9721 23.8853 99.9721 19.7295Z"
        fill="white"
      />
      <path
        d="M37.3324 7.22015C30.4609 7.22015 24.8464 12.8452 24.8464 19.7295C24.8464 24.7248 27.7793 29.2164 32.3464 31.1894C33.4358 31.6511 34.6927 31.1474 35.1536 30.056C35.6145 28.9646 35.1117 27.7052 34.0224 27.2015C31.0475 25.9422 29.1201 22.9618 29.1201 19.7295C29.1201 15.1959 32.8073 11.5438 37.2905 11.5438C41.8156 11.5438 45.4609 15.2379 45.4609 19.7295C45.4609 22.1642 44.4134 24.431 42.6117 25.9422L31.9274 33.9599C30.9637 34.6735 30.7961 36.0168 31.5084 36.9823C32.2207 37.9478 33.5615 38.1157 34.5251 37.4021L44.581 29.8881L44.6648 29.8461L45.2933 29.3424L45.3771 29.3004C48.2263 26.9077 49.8184 23.4235 49.8184 19.7295C49.7765 12.8032 44.2039 7.22015 37.3324 7.22015ZM40.0978 34.5476L33.8548 39.2071C32.8911 39.9207 32.7235 41.264 33.4358 42.2295C34.1481 43.195 35.4888 43.3629 36.4525 42.6493L42.6955 37.9897C43.6592 37.2761 43.8268 35.9328 43.1145 34.9674C42.4022 34.0438 41.0615 33.834 40.0978 34.5476Z"
        fill={props.isWhite ? "white" : PRIMARY_COLOR}
      />
    </svg>
  );
}

function LogoBadge(props: CommonProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height={props.height || 86}
      viewBox="0 0 60 86"
      fill="none"
    >
      <g clip-path="url(#clip0_36_2651)">
        <path
          d="M30.0998 0.199951C13.6998 0.199951 0.299805 13.6 0.299805 30C0.299805 41.8999 7.2998 52.6 18.1998 57.3C20.7998 58.4 23.7998 57.1999 24.8998 54.5999C25.9998 52 24.7998 49 22.1998 47.8C15.0998 44.8 10.4998 37.7 10.4998 30C10.4998 19.2 19.2998 10.5 29.9998 10.5C40.7998 10.5 49.4998 19.2999 49.4998 30C49.4998 35.7999 46.9998 41.2 42.6998 44.7999L17.1998 63.9C14.8998 65.6 14.4998 68.7999 16.1998 71.0999C17.8998 73.3999 21.0998 73.7999 23.3998 72.0999L47.3998 54.1999L47.5998 54.0999L49.0998 52.9L49.2998 52.8C56.0998 47.1 59.8998 38.7999 59.8998 30C59.7998 13.5 46.4998 0.199951 30.0998 0.199951ZM36.6998 65.3L21.7998 76.3999C19.4998 78.0999 19.0998 81.2999 20.7998 83.5999C22.4998 85.8999 25.6998 86.2999 27.9998 84.5999L42.8998 73.5C45.1998 71.8 45.5998 68.6 43.8998 66.3C42.1998 64.1 38.9998 63.6 36.6998 65.3Z"
          fill={props.isWhite ? "white" : PRIMARY_COLOR}
        />
      </g>
      <defs>
        <clipPath id="clip0_36_2651">
          <rect width="60" height="86" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
