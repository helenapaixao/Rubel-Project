export interface IComments {
  kind: string;
  etag: string;
  comment: string;
  items: [
    {
      kind: string;
      etag: string;
      id: string;
      snippet: {
        videoId: string;
        topLevelComment: {
          kind: string;
          etag: string;
          id: string;
          snippet: {
            videoId: string;
            textDisplay: string;
            textOriginal: string;
            authorDisplayName: string;
            authorProfileImageUrl: string;
            authorChannelUrl: string;
            authorChannelId: {
              value: string;
            };
            canRate: boolean;
            viewerRating: string;
            likeCount: number;
          };
        };
        canReply: true;
        totalReplyCount: 0;
        isPublic: true;
      };
    }
  ];
}

