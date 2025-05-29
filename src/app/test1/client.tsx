'use client'

export default function PageIndex() {
  // const [_allStates, _setAllStates] = React.useState(new AllStates());
  // FillClassProps(allStatesCache, _allStates); const setAllStatesCache = (newValues: Partial<AllStates>) => { if (!mount) return; FillClassProps(allStatesCache, newValues); _setAllStates({ ...allStatesCache }); };

  // const router = useRouter();
  // const searchParams = useSearchParams();
  // const { loggedUser, autoLoadUserAllSourcesDone } = useLoggedUser({ id: pageSelf.pathname });
  // const param_referrerSignUpUserSeq = searchParams?.get(paramsApp.referrerSignUpUserSeq);
  // const param_referrerSignUpSubUrl = searchParams?.get(paramsApp.referrerSignUpSubUrl);

  // React.useEffect(() => {
  //   if (!autoLoadUserAllSourcesDone) return;
  //   mount = true;
  //   const cookieVal = CookieCli.getJSON(cookiesApp.referrerSignUp);
  //   const referrerSignUp = ReferrerSignUp.init(cookieVal || {});
  //   try {
  //     if (param_referrerSignUpUserSeq != null)
  //       referrerSignUp.userSeq = [param_referrerSignUpUserSeq, ...referrerSignUp.userSeq.filter((x) => x !== param_referrerSignUpUserSeq)];
  //     if (param_referrerSignUpSubUrl != null)
  //       referrerSignUp.subUrl = [param_referrerSignUpSubUrl, ...referrerSignUp.subUrl.filter((x) => x !== param_referrerSignUpSubUrl)];
  //     if (campainId != null)
  //       referrerSignUp.campainId = [campainId, ...referrerSignUp.campainId.filter((x) => x !== campainId)];
  //   }
  //   catch (error: any) {
  //     SystemMsgCliError(pageSelf.pathname, error, loggedUser, 'ReferrerSignUp');
  //   }
  //   CookieCli.setJSON(cookiesApp.referrerSignUp, referrerSignUp, { maxAgeSeconds: (7 * 24 * 60 * 60) }); // atualiza com os novos referrers do parm
  //   setAllStatesCache(AllStates.init({ preparing: 'initiating' }));
  //   return () => { mount = false; ClearPageWindows(); };
  // }, [autoLoadUserAllSourcesDone, campainId, param_referrerSignUpSubUrl, param_referrerSignUpUserSeq, searchParams.toString()]);

  // React.useEffect(() => {
  //   if (allStatesCache.preparing === 'initiating') {
  //     //if (loggedUser != null) return router.push(pagesApp.home.pathname);
  //     window.scrollTo(0, 0); // necessário o para mobile Sansung !!!!
  //     if (!mount) return;
  //     setAllStatesCache({ preparing: 'ready' });
  //   }
  // }, [allStatesCache.preparing]);

  // if (allStatesCache.error != null) return <AbortProc error={allStatesCache.error} tela={pageSelf.pathname} />;

  return (
    <div>
      test 1
    </div>
  );
}