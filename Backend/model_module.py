from sklearn.base import BaseEstimator, TransformerMixin
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.neighbors import NearestNeighbors
from sklearn.preprocessing import normalize

class PaperRecommendationModel(BaseEstimator, TransformerMixin):
    def __init__(self, k=5):
        self.k = k
        self.vectorizer = TfidfVectorizer()
        self.knn_model = NearestNeighbors(n_neighbors=k, metric='cosine')

    def fit(self, X, y=None):
        # Preprocessing
        text_data = X['title'] + ' ' + X['abstract']
        text_data = text_data.fillna('')
        self.feature_vectors = self.vectorizer.fit_transform(text_data)


        self.feature_vectors = normalize(self.feature_vectors)

        self.knn_model.fit(self.feature_vectors)

        return self

    def predict(self, query):

        query_vector = self.vectorizer.transform([query])
        query_vector = normalize(query_vector)


        distances, indices = self.knn_model.kneighbors(query_vector, n_neighbors=self.k+1)
        distances = distances.flatten()[1:]
        indices = indices.flatten()[1:]

        recommended_papers = data_frame.iloc[indices]
        recommended_papers['distance'] = distances

        return recommended_papers

    def transform(self, X):
        return X
    